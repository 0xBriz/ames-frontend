import React, { useMemo, useContext } from 'react';
import styled from 'styled-components';

// import Button from '../../../components/Button';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import DepositModal from './DepositModal';
// import Card from '../../../components/Card';
// import CardContent from '../../../components/CardContent';
import CardIcon from '../../../components/CardIcon';
import { AddIcon, RemoveIcon } from '../../../components/icons';
// import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '../../../components/IconButton';
import Label from '../../../components/Label';
import Value from '../../../components/Value';
// import {ThemeContext} from 'styled-components';

import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useModal from '../../../hooks/useModal';
import useStake from '../../../hooks/useStake';
import useNodePrice from '../../../hooks/useNodePrice';
// import useZap from '../../../hooks/useZap';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useTokenBalance from '../../../hooks/useTokenBalance';
// import useWithdraw from '../../../hooks/useWithdraw';

import { getDisplayBalance } from '../../../utils/formatBalance';

import TokenSymbol from '../../../components/TokenSymbol';

// interface StakeProps {
//   bank: Bank;
// }

const Stake = ({ bank, disabled }) => {
  const [approveStatus, approve] = useApprove(bank.depositToken, bank.address);

  // const {color: themeColor} = useContext(ThemeContext);
  const tokenBalance = useTokenBalance(bank.depositToken);
  const nodePrice = useNodePrice(bank.contract, bank.poolId, bank.sectionInUI);
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);

  const tokenPriceInDollars = useMemo(
    () => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null),
    [stakedTokenPriceInDollars],
  );
  const earnedInDollars = (
    Number(tokenPriceInDollars) * Number(getDisplayBalance(nodePrice, bank.depositToken.decimal))
  ).toFixed(2);
  const { onStake } = useStake(bank);

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      bank={bank}
      max={tokenBalance}
      decimals={bank.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onStake(amount);
        onDismissDeposit();
      }}
      tokenName={bank.depositTokenName}
    />,
  );

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon backgroundColor="#F9DC64">
              <TokenSymbol size={95} symbol={bank.depositTokenName} />
            </CardIcon>
            <Typography style={{ textTransform: 'uppercase', color: '#930993' }}>
              <Value value={getDisplayBalance(nodePrice, bank.depositToken.decimal, 1)} />
            </Typography>

            <Label text={`≈ $${earnedInDollars}`} />

            <Typography
              style={{ textTransform: 'uppercase', color: '#322f32' }}
            >{`${bank.earnTokenName} NODE COST`}</Typography>
            {/* <Label text={`${bank.depositTokenName} Staked`} /> */}
          </StyledCardHeader>
          {!disabled ? (
            <StyledCardActions>
              {approveStatus !== ApprovalState.APPROVED ? (
                <Button
                  disabled={
                    bank.closedForStaking ||
                    approveStatus === ApprovalState.PENDING ||
                    approveStatus === ApprovalState.UNKNOWN
                  }
                  onClick={approve}
                  className={
                    bank.closedForStaking ||
                    approveStatus === ApprovalState.PENDING ||
                    approveStatus === ApprovalState.UNKNOWN
                      ? 'shinyButtonDisabled'
                      : 'shinyButton'
                  }
                  style={{ marginTop: '20px' }}
                >
                  {`Approve ${bank.depositTokenName}`}
                </Button>
              ) : (
                <IconButton
                  disabled={bank.closedForStaking}
                  onClick={() => (bank.closedForStaking ? null : onPresentDeposit())}
                >
                  <AddIcon color={'black'} />
                </IconButton>
              )}
            </StyledCardActions>
          ) : null}
        </StyledCardContentInner>
      </CardContent>
    </Card>
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
`;

export default Stake;
