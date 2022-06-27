import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Typography, Grid } from '@material-ui/core';
import TokenSymbol from '../../../components/TokenSymbol';
import { ContractName, ExtinctionRewardToken } from '../../../bomb-finance/types';
import useBombFinance from '../../../hooks/useBombFinance';
import useBombStats from '../../../hooks/useBombStats';
import useExtinctionClaimRewards from '../../../hooks/useExtinctionClaimRewards';

const ExtinctionRewardCard: React.FC<{ rewards: ExtinctionRewardToken[]; poolName: ContractName }> = ({
  rewards,
  poolName,
}) => {
  const bombFinance = useBombFinance();
  const bombStats = useBombStats();
  const [hasRewards, setHasRewards] = useState(false);
  const { doClaim } = useExtinctionClaimRewards(poolName);

  const checkRewards = () => {
    let hasClaim = false;
    rewards.forEach((rw) => (hasClaim = Number(rw.userPendingAmount) > 0));
    setHasRewards(hasClaim);
  };

  const handleClaim = () => {
    if (hasRewards) {
      doClaim();
    }
  };

  useEffect(() => {
    if (rewards) {
      checkRewards();
    }
  }, [rewards]);

  const labels = {
    fontWeight: 700,
  };

  return (
    <Grid>
      {
        <Card variant="outlined">
          <CardContent>
            <Box style={{ width: '376px' }}>
              <Grid container style={{ marginTop: '20px' }}>
                <Grid item xs={12}>
                  <Typography style={labels} align="center">
                    Your Total Rewards
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography style={labels} align="center">
                    $0.00
                  </Typography>
                </Grid>
                {rewards?.map((token, i) => {
                  return (
                    <Grid container justifyContent="space-between" key={i} style={{ marginTop: '10px' }}>
                      <Grid item xs={1}>
                        <TokenSymbol size={32} symbol={token.name} />
                      </Grid>
                      <Grid item xs={1}>
                        <Typography
                          style={{
                            fontWeight: 700,
                            paddingTop: '5px',
                          }}
                        >
                          {' '}
                          {token.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography align="right"> {token.userPendingAmount}</Typography>
                        <Typography align="right"> ${token.userPendingValue || 0.0}</Typography>
                      </Grid>
                    </Grid>
                  );
                })}

                <Grid container style={{ marginTop: '20px' }}>
                  <Button
                    className="shinyButtonSecondary"
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
      }
    </Grid>
  );
};

export default ExtinctionRewardCard;
