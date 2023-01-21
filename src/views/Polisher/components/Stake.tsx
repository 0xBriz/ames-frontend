import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Box, Button, Card, CardContent } from '@material-ui/core';

// import Button from '../../../components/Button';
// import Card from '../../../components/Card';
// import CardContent from '../../../components/CardContent';
import CardIcon from '../../../components/CardIcon';
import { AddIcon, RemoveIcon } from '../../../components/icons';
import IconButton from '../../../components/IconButton';
import Label from '../../../components/Label';
import Value from '../../../components/Value';
//import useXbombBalance from '../../../hooks/useXbombBalance';
import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useModal from '../../../hooks/useModal';
import MetamaskFox from '../../../assets/img/metamask-fox.svg';
import { getDisplayBalance } from '../../../utils/formatBalance';

import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';
import useBombFinance from '../../../hooks/useBombFinance';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import TokenSymbol from '../../../components/TokenSymbol';
import useSwapToXAmes from '../../../hooks/useSwapToXAmes';
import useSwapperNextPrice from '../../../hooks/useSwapperNextPrice';
import useWithdrawFromBomb from '../../../hooks/useWithdrawFromBomb';
import useXbombBalance from '../../../hooks/useXbombBalance';

import { BigNumber } from 'ethers';
import useTokenBalance from '../../../hooks/useTokenBalance';

const Stake: React.FC = () => {
  const bombFinance = useBombFinance();
  const [approveStatus, approve] = useApprove(bombFinance.AMES, bombFinance.contracts['xAmesSwapper'].address);

  const nextPrice = useSwapperNextPrice();
  const ratio = useMemo(
    () =>
      nextPrice
        ? nextPrice.eq(BigNumber.from(0))?"1:1": (Number(nextPrice)/100).toFixed(2)+":1"
        : "--:--",
    [nextPrice],
  );
  const amesBal = useTokenBalance(bombFinance.AMES);

  const { onStake } = useSwapToXAmes();

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={amesBal}
      onConfirm={(value) => {
        onStake(value);
        onDismissDeposit();
      }}
      tokenName={'Ames'}
    />,
  );

  return (
    <Box style={{ position: 'relative' }}>
      <Card>
        <CardContent>
          <StyledCardContentInner>
            <StyledCardHeader>
              <CardIcon backgroundColor="#FFF">
                <TokenSymbol size={95} symbol="AMES" />
                {'-'}
                <TokenSymbol size={95} symbol="XAMES" />
              </CardIcon>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('xAMES');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
              <Value value={ratio} />
              {/* <Label text={`≈ $${tokenPriceInDollars || '0.00'}`} variant="black" /> */}
              <Label text={'Swap Ratio'} variant="black" />
            </StyledCardHeader>
            <StyledCardActions>
              {approveStatus !== ApprovalState.APPROVED ? (
                <Button
                  disabled={approveStatus !== ApprovalState.NOT_APPROVED}
                  className={approveStatus !== ApprovalState.NOT_APPROVED ? 'shinyButton' : 'shinyButtonDisabled'}
                  style={{ marginTop: '20px' }}
                  onClick={approve}
                >
                  Approve Ames
                </Button>
              ) : (
                <>
                  {/* <IconButton onClick={onPresentWithdraw}>
                    <RemoveIcon color={'black'} />
                  </IconButton>
                  <StyledActionSpacer /> */}
                  <IconButton onClick={onPresentDeposit}>
                    <AddIcon color={'black'} />
                  </IconButton>
                </>
              )}
            </StyledCardActions>
          </StyledCardContentInner>
        </CardContent>
      </Card>
    </Box>
  );
};

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  width: 100%;
`;

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0;
`;

export default Stake;
