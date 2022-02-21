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
import useTokenBalance from '../../../hooks/useTokenBalance';
import MetamaskFox from '../../../assets/img/metamask-fox.svg';
import { getDisplayBalance } from '../../../utils/formatBalance';

import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';
import useBombFinance from '../../../hooks/useBombFinance';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import TokenSymbol from '../../../components/TokenSymbol';
import useStakeToBomb from '../../../hooks/useStakeToBomb';
import useWithdrawFromBomb from '../../../hooks/useWithdrawFromBomb';
import useXbombBalance from '../../../hooks/useXbombBalance';

const Stake: React.FC = () => {
  const bombFinance = useBombFinance();
  const [approveStatus, approve] = useApprove(bombFinance.BOMB, bombFinance.contracts.XQuartz.address);

  const tokenBalance = useTokenBalance(bombFinance.BOMB);
  //const stakedBalance = useStakedBomb();
  const stakedBalance = useTokenBalance(bombFinance.XBOMB);

  const xbombBalance = useXbombBalance();
  const xbombRate = Number(xbombBalance) / 1000000000000000000;
  const stakedTokenPriceInDollars = Number(useStakedTokenPriceInDollars('BOMB', bombFinance.BOMB)) * xbombRate;

  const tokenPriceInDollars = useMemo(
    () =>
      stakedTokenPriceInDollars
        ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
        : null,
    [stakedTokenPriceInDollars, stakedBalance],
  );
  // const isOldBoardroomMember = boardroomVersion !== 'latest';

  const { onStake } = useStakeToBomb();
  const { onWithdraw } = useWithdrawFromBomb();

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={(value) => {
        onStake(value);
        onDismissDeposit();
      }}
      tokenName={'QUARTZ'}
    />,
  );

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={(value) => {
        onWithdraw(value);
        onDismissWithdraw();
      }}
      tokenName={'xQUARTZ'}
    />,
  );

  return (
    <Box style={{ position: 'relative' }}>
      <Card>
        <CardContent>
          <StyledCardContentInner>
            <StyledCardHeader>
              <CardIcon backgroundColor="#F9C46A">
                <TokenSymbol size={95} symbol="XQUARTZ" />
              </CardIcon>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('XQUARTZ');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
              <Value value={getDisplayBalance(stakedBalance)} />
              <Label text={`≈ $${tokenPriceInDollars || '0.00'}`} variant="black" />
              <Label text={'xQuartz Balance'} variant="black" />
            </StyledCardHeader>
            <StyledCardActions>
              {approveStatus !== ApprovalState.APPROVED ? (
                <Button
                  disabled={approveStatus !== ApprovalState.NOT_APPROVED}
                  className={approveStatus !== ApprovalState.NOT_APPROVED ? 'shinyButton' : 'shinyButtonDisabled'}
                  style={{ marginTop: '20px' }}
                  onClick={approve}
                >
                  Approve QUARTZ
                </Button>
              ) : (
                <>
                  <IconButton onClick={onPresentWithdraw}>
                    <RemoveIcon color={'black'} />
                  </IconButton>
                  <StyledActionSpacer />
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
