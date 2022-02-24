import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Button, Typography } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import { AddIcon, RemoveIcon } from '../../../components/icons';
import IconButton from '../../../components/IconButton';
import Value from '../../../components/Value';

import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useModal from '../../../hooks/useModal';
import useStake from '../../../hooks/useStake';
import useZap from '../../../hooks/useZap';
import useStakedBalance from '../../../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useWithdraw from '../../../hooks/useWithdraw';

import { getDisplayBalance } from '../../../utils/formatBalance';

import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';
import ZapModal from './ZapModal';
import { Bank } from '../../../bomb-finance';
import useBombFinance from '../../../hooks/useBombFinance';

interface StakeProps {
  bank: Bank;
}

const StyledLink = styled.a`
  text-decoration: underline;
  color: inherit;
`;

const Stake: React.FC<StakeProps> = ({ bank }) => {
  const bombFinance = useBombFinance();
  const [approveStatus, approve] = useApprove(bank.depositToken, bank.address);
  const tokenBalance = useTokenBalance(bank.depositToken);
  const stakedBalance = useStakedBalance(bank.contract, bank.poolId);
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);
  const tokenPriceInDollars = useMemo(
    () => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null),
    [stakedTokenPriceInDollars],
  );
  const earnedInDollars = (
    Number(tokenPriceInDollars) * Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal))
  ).toFixed(4);
  const { onStake } = useStake(bank);
  const { onZap } = useZap(bank);
  const { onWithdraw } = useWithdraw(bank);
  const bombAddr = bombFinance.BOMB.address;
  const bshareAddr = bombFinance.BSHARE.address;

  let swapURL;

  if (bank.depositTokenName.startsWith('AMES')) {
    swapURL = 'https://pancakeswap.finance/add/0x23396cF899Ca06c4472205fC903bDB4de249D6fC/' + bombAddr;
  } else if (bank.depositTokenName.includes('ASHARE')) {
    swapURL = 'https://pancakeswap.finance/add/0x23396cF899Ca06c4472205fC903bDB4de249D6fC/' + bshareAddr;
  } else {
    swapURL =
      'https://pancakeswap.finance/add/0x23396cF899Ca06c4472205fC903bDB4de249D6fC/0x36d53ed6380313f3823eed2f44dddb6d1d52f656';
  }

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
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

  const [onPresentZap, onDissmissZap] = useModal(
    <ZapModal
      decimals={bank.depositToken.decimal}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onZap(zappingToken, tokenName, amount);
        onDissmissZap();
      }}
      tokenName={bank.depositTokenName}
    />,
  );

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      decimals={bank.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onWithdraw(amount);
        onDismissWithdraw();
      }}
      tokenName={bank.depositTokenName}
    />,
  );

  return (
    <StyledCardContentInner>
      <StyledCardHeader>
        <Value value={getDisplayBalance(stakedBalance, bank.depositToken.decimal)} />
        <Typography
          style={{ textTransform: 'uppercase', color: 'black', fontSize: '14px' }}
        >{`≈ $${earnedInDollars}`}</Typography>
        <Typography style={{ textTransform: 'uppercase', color: 'black', fontSize: '14px' }}>
          <StyledLink href={swapURL} target="_blank">
            {`${bank.depositTokenName} Staked`}
            <OpenInNewIcon
              style={{ fontSize: '12px', display: 'inline-block', position: 'relative', top: '-7px' }}
              color="inherit"
            />
          </StyledLink>
        </Typography>
      </StyledCardHeader>
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
            {`Approve`}
          </Button>
        ) : (
          <>
            <IconButton onClick={onPresentWithdraw}>
              <RemoveIcon color="black" />
            </IconButton>
            <StyledActionSpacer />
            <IconButton
              disabled={bank.closedForStaking}
              onClick={() => (bank.closedForStaking ? null : onPresentDeposit())}
            >
              <AddIcon color="black" />
            </IconButton>
          </>
        )}
      </StyledCardActions>
    </StyledCardContentInner>
  );
};

const StyledCardHeader = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  color: white;
`;
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
`;

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export default Stake;
