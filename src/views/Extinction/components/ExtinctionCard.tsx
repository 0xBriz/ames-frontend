import React from 'react';
import { Box, Button, Card, CardContent, Typography, Grid } from '@material-ui/core';
import TokenSymbol from '../../../components/TokenSymbol';
import { ExtinctionPoolInfo } from '../../../bomb-finance/types';
import useModal from '../../../hooks/useModal';
import DepositModal from '../../Bank/components/DepositModal';
import useExtinctionDeposit from '../../../hooks/useExtinctionDeposit';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useApprove from '../../../hooks/useApprove';
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
    <Grid item xs={12} md={4} lg={4}>
      {pool && (
        <Card variant="outlined">
          <CardContent>
            <Box style={{ position: 'relative' }}>
              <Box
                style={{
                  position: 'absolute',
                  right: '0px',
                  top: '-5px',
                  height: '48px',
                  width: '48px',
                  borderRadius: '40px',
                  backgroundColor: '#363746',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <TokenSymbol size={32} symbol={pool.depositTokenName} />
              </Box>

              <Typography variant="h5" component="h2">
                {pool.depositTokenName}
              </Typography>

              <Grid container spacing={1} style={{ marginTop: '20px' }}>
                <Grid item xs={12}>
                  <Typography style={labels}>Deposit {pool.depositTokenName.toUpperCase()} Earn: </Typography>
                </Grid>
                {pool.rewardTokens?.map((token, i) => {
                  return (
                    <Grid item xs={2} key={i}>
                      <TokenSymbol size={32} symbol={token.name} />
                    </Grid>
                  );
                })}
              </Grid>

              <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
                <Button className="shinyButtonSecondary" disabled={!pool.active} onClick={onPresentDeposit}>
                  Deposit
                </Button>
              </Grid>

              <Grid container justifyContent="space-between" style={{ marginTop: '20px' }}>
                <Grid item xs={6}>
                  <Typography style={labels}>APR:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right"> {pool.APR}</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-between" style={{ marginTop: '10px' }}>
                <Grid item xs={6}>
                  <Typography style={labels}>Your Deposits:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right"> {pool.APR}</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-between" style={{ marginTop: '10px' }}>
                <Grid item xs={6}>
                  <Typography style={labels}>Start Block:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right"> {pool.startBlock}</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-between" style={{ marginTop: '10px' }}>
                <Grid item xs={6}>
                  <Typography style={labels}>End Block:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right"> {pool.endBlock}</Typography>
                </Grid>
              </Grid>

              {/* <Grid container justifyContent="space-between" style={{ marginTop: '10px' }}>
                <Grid item xs={6}>
                  <Typography style={labels}>Total AMES Desposited:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right"> {pool.totalDepositTokenAmount}</Typography>
                </Grid>
              </Grid> */}

              <Grid container style={{ marginTop: '20px' }}>
                <Grid item xs={12}>
                  <Typography style={labels} align="center">
                    Your Rewards
                  </Typography>
                </Grid>
                {pool.rewardTokens?.map((token, i) => {
                  return (
                    <Grid container justifyContent="space-between" key={i} style={{ marginTop: '10px' }}>
                      <Grid item xs={6}>
                        <TokenSymbol size={32} symbol={token.name} />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography align="right"> {token.userPendingAmount}</Typography>
                      </Grid>
                    </Grid>
                  );
                })}

                <Grid container justifyContent="flex-end" alignItems="flex-end" style={{ marginTop: '20px' }}>
                  <Button className="shinyButtonSecondary" disabled={!pool.hasRewardsToClaim}>
                    Claim
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      )}
    </Grid>
  );
};

export default ExtinctionPoolCard;
