import React from 'react';
import { Box, Button, Card, CardContent, Typography, Grid } from '@material-ui/core';
import TokenSymbol from '../../../components/TokenSymbol';
import { ExtinctionPoolInfo } from '../../../bomb-finance/types';
import useModal from '../../../hooks/useModal';
import DepositModal from '../../Bank/components/DepositModal';
import useExtinctionDeposit from '../../../hooks/useExtinctionDeposit';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useBombFinance from '../../../hooks/useBombFinance';

const ExtinctionPoolCard: React.FC<{ pool: ExtinctionPoolInfo }> = ({ pool }) => {
  const bombFinance = useBombFinance();
  const [approveStatus, approve] = useApprove(pool.depositToken, bombFinance.contracts[pool.contract].address);
  const tokenBalance = useTokenBalance(pool.depositToken);
  const { onDeposit } = useExtinctionDeposit(pool);

  // claimExtinctionPool()

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      decimals={pool.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onDeposit(amount);
        onDismissDeposit();
      }}
      tokenName={pool.depositTokenName}
    />,
  );

  const labels = {
    fontWeight: 700,
  };

  return (
    <Grid item>
      {pool && (
        <Card variant="outlined">
          <CardContent>
            <Box style={{ width: '376px' }}>
              <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Grid item>
                  <TokenSymbol symbol={pool.depositTokenName} />
                </Grid>
              </Grid>

              <Typography
                align="center"
                style={{
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '38px',
                  marginTop: '10px',
                }}
              >
                {pool.depositTokenName}
              </Typography>

              <Grid container justifyContent="center" spacing={3} style={{ marginTop: '20px' }}>
                {pool.rewardTokens?.map((token, i) => {
                  return (
                    <Grid
                      item
                      xs={1}
                      key={i}
                      style={{
                        marginLeft: '5px',
                      }}
                    >
                      <TokenSymbol size={28} symbol={token.name} />
                    </Grid>
                  );
                })}
                <Grid item>
                  <Typography style={labels}>Reward Pool</Typography>
                </Grid>
              </Grid>

              <Grid container justifyContent="space-between" style={{ marginTop: '20px' }}>
                <Grid item xs={6}>
                  <Typography style={labels}>Duration:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right"> 7 days</Typography>
                </Grid>
              </Grid>

              <Grid container justifyContent="space-between" style={{ marginTop: '10px' }}>
                <Grid item xs={6}>
                  <Typography style={labels}>Your Deposits:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right"> {pool.userInfo?.amountDeposited}</Typography>
                </Grid>
              </Grid>

              <Grid container justifyContent="space-between" style={{ marginTop: '20px' }}>
                <Grid item xs={6}>
                  <Typography style={labels}>Total Deposits:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right">
                    {' '}
                    {pool.totalDepositTokenAmount}/{pool.maxDepositAmount} AMES
                  </Typography>
                </Grid>
              </Grid>

              <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
                {approveStatus !== ApprovalState.APPROVED ? (
                  <Button
                    fullWidth={true}
                    disabled={
                      !pool.active || approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN
                    }
                    onClick={approve}
                    className={
                      approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN
                        ? 'shinyButtonDisabled'
                        : 'shinyButton'
                    }
                    style={{ marginTop: '20px' }}
                  >
                    {`Approve`}
                  </Button>
                ) : (
                  <Button
                    className="shinyButtonSecondary"
                    disabled={!pool.active}
                    onClick={onPresentDeposit}
                    fullWidth={true}
                  >
                    Deposit
                  </Button>
                )}
              </Grid>

              <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
                <Typography style={labels}>⚠️ Deposited AMES cannot be withdrawn.</Typography>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      )}
    </Grid>
  );
};

export default ExtinctionPoolCard;
