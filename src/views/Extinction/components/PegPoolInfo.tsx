import React from 'react';
import { Box, Button, Grid, Card, CardContent, Typography } from '@material-ui/core';
import useModal from '../../../hooks/useModal';
import DepositModal from '../../Bank/components/DepositModal';
import useTokenBalance from '../../../hooks/useTokenBalance';
import usePegPoolDeposit from '../../../hooks/usePegPoolDeposit';
import { PegPool, PegPoolToken } from '../../../bomb-finance/types';
import { ApprovalState } from '../../../hooks/useApprove';
import PegPoolRewards from './PegPoolRewards';
import usePegPoolApprove from '../../../hooks/usePegPoolApproval';
import TokenSymbol from '../../../components/TokenSymbol';
import usePegPoolWithdrawFee from '../../../hooks/usePegPoolWithdrawFee';
import { Skeleton } from '@material-ui/lab';
import usePegPoolWithdraw from '../../../hooks/usePegPoolWithdraw';
import WithdrawModal from '../../Bank/components/WithdrawModal';

const PegPoolInfo: React.FC<{ pegPool: PegPool; rewardTokens: PegPoolToken[]; totalRewardValue: string }> = ({
  pegPool,
  rewardTokens,
  totalRewardValue,
}) => {
  const tokenBalance = useTokenBalance(pegPool.depositToken);
  const { onDeposit } = usePegPoolDeposit(pegPool);
  const { onWithdraw } = usePegPoolWithdraw(pegPool);
  const [approveStatus, approve] = usePegPoolApprove(pegPool);
  const { withdrawFeePercent } = usePegPoolWithdrawFee();

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      decimals={pegPool.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onDeposit(amount);
        onDismissDeposit();
      }}
      tokenName={pegPool.depositTokenName}
    />,
  );

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={pegPool.userInfo.amountDepositedBN}
      decimals={pegPool.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onWithdraw(amount);
        onDismissWithdraw();
      }}
      tokenName={pegPool.depositTokenName}
    />,
  );

  return (
    <Grid container justifyContent="space-evenly">
      <Grid item>
        <Card variant="outlined">
          <CardContent>
            <Box style={{ width: '376px' }}>
              <Grid container justifyContent="space-between" style={{ marginTop: '10px' }}>
                <Grid item xs={6}>
                  <Grid container alignItems="center">
                    <TokenSymbol size={24} symbol={'BUSD'} />
                    <span
                      style={{
                        display: 'inline-block',
                        marginLeft: '4px',
                        fontWeight: 'bold',
                      }}
                    >
                      Your Deposits:
                    </span>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right"> {pegPool.userInfo?.amountDeposited}</Typography>
                </Grid>
              </Grid>
              {/* <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
                {approveStatus != ApprovalState.APPROVED ? (
                  <Button
                    className="shinyButtonSecondary"
                    disabled={!pegPool.depositsEnabled}
                    onClick={approve}
                    fullWidth={true}
                  >
                    Approve
                  </Button>
                ) : (
                  <Button
                    className="shinyButtonSecondary"
                    disabled={!pegPool.depositsEnabled}
                    onClick={onPresentDeposit}
                    fullWidth={true}
                  >
                    {pegPool.depositsEnabled ? 'Deposit' : 'Above Peg'}
                  </Button>
                )}
              </Grid> */}

              <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Typography>
                  Current TWAP withdraw fee = {withdrawFeePercent ? withdrawFeePercent : <Skeleton />}%
                </Typography>

                <Button
                  className="shinyButtonSecondary"
                  fullWidth={true}
                  disabled={!pegPool.userInfo?.isDeposited}
                  onClick={onPresentWithdraw}
                >
                  Withdraw
                </Button>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        {rewardTokens && <PegPoolRewards rewardTokens={rewardTokens} totalRewardValue={totalRewardValue} />}
      </Grid>
    </Grid>
  );
};

export default PegPoolInfo;
