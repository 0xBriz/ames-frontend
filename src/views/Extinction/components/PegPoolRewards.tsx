import { Box, Button, Card, CardContent, Typography, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { PegPoolToken } from '../../../bomb-finance/types';
import TokenSymbol from '../../../components/TokenSymbol';
import usePegPoolRewardsClaim from '../../../hooks/usePegPoolRewardsClaim';

const PegPoolRewards: React.FC<{
  rewardTokens: PegPoolToken[];
  totalRewardValue: string;
  apr: { daily: string; yearly: string };
}> = ({ rewardTokens, totalRewardValue, apr }) => {
  const [hasRewards, setHasRewards] = useState(false);
  const { doClaim } = usePegPoolRewardsClaim();

  const checkRewards = () => {
    let hasClaim = false;

    rewardTokens.forEach((rw) => (hasClaim = rw.pendingValueBN?.gt(0)));

    setHasRewards(hasClaim);
  };

  const handleClaim = () => {
    if (hasRewards) {
      doClaim();
    }
  };

  useEffect(() => {
    if (rewardTokens?.length) {
      checkRewards();
    }
  }, [rewardTokens]);

  const labels = {
    fontWeight: 700,
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box style={{ width: '376px' }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography style={labels} align="center">
                Your Total Rewards
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={labels} align="center">
                ${totalRewardValue}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            style={{
              fontWeight: 500,
              marginTop: '15px',
            }}
          >
            Daily APR:
            <Grid item>{apr.daily}%</Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            style={{
              fontWeight: 500,
              marginTop: '5px',
            }}
          >
            Yearly APR:
            <Grid item>{apr.yearly}%</Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
            {rewardTokens?.map((token, i) => {
              return (
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  key={i}
                  style={{ marginTop: '10px' }}
                >
                  <Grid item xs={1}>
                    <TokenSymbol size={36} symbol={token.name} />
                  </Grid>
                  <Grid item xs={1}>
                    <Typography
                      style={{
                        fontWeight: 700,
                        paddingTop: '5px',
                        display: 'block',
                      }}
                    >
                      {' '}
                      {token.name}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: '14px',
                        color: 'rgb(130, 130, 130)',
                      }}
                    >
                      {token.currentPrice}
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography align="right"> {token.amount}</Typography>
                    <Typography align="right"> ${token.pendingValue}</Typography>
                  </Grid>
                </Grid>
              );
            })}
            <Grid container style={{ marginTop: '20px' }}>
              <Button
                className={hasRewards ? 'shinyButtonSecondary' : 'shinyButtonDisabled'}
                fullWidth={true}
                disabled={!hasRewards}
                onClick={handleClaim}
              >
                Claim
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PegPoolRewards;
