import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent } from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import { Helmet } from 'react-helmet';
import PegPoolInfo from './components/PegPoolInfo';
import usePegPool from '../../hooks/usePegPool';
import usePegPoolRewards from '../../hooks/usePegPoolRewards';
import TokenSymbol from '../../components/TokenSymbol';

const TITLE = 'ames.defi | Peg Pool';

const Extinction: React.FC = () => {
  const { account } = useWallet();
  const { path } = useRouteMatch();
  const { pegPool } = usePegPool();
  const { rewardTokens, totalRewardValue } = usePegPoolRewards();

  console.log(pegPool);
  console.log(rewardTokens);

  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <Helmet>
            <title>{TITLE}</title>
          </Helmet>
          {!!account ? (
            <Container maxWidth="lg">
              {pegPool && rewardTokens && (
                <Box mt={5}>
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                      <TokenSymbol size={96} symbol={'BUSD'} />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    spacing={2}
                    style={{
                      marginTop: '15px',
                    }}
                  >
                    <Grid item>
                      <TokenSymbol size={48} symbol={'ASHARE'} />
                    </Grid>
                    <Grid item>
                      <TokenSymbol size={48} symbol={'AALTO'} />
                    </Grid>
                    <Grid item>
                      <Typography style={{ fontSize: '18px', lineHeight: '22px', paddingTop: '15px' }}>
                        Innovative Reward Pool
                      </Typography>
                    </Grid>
                  </Grid>
                  <div>
                    <Typography
                      style={{ textTransform: 'none', fontWeight: 'bold', marginTop: '20px' }}
                      color="textPrimary"
                      align="center"
                      variant="h3"
                    >
                      Peg Campaign Pool
                    </Typography>

                    <Typography style={{ marginTop: '15px' }} align="center">
                      Deposit BUSD - Get ASHARE and AALTO rewards
                    </Typography>

                    <Typography
                      style={{ textTransform: 'none', fontWeight: 'bold', marginTop: '20px' }}
                      color="textPrimary"
                      align="center"
                      variant="h5"
                    >
                      Total Value Locked: {pegPool.totalDesposits}
                    </Typography>

                    <div
                      style={{
                        marginTop: '35px',
                      }}
                    >
                      <PegPoolInfo pegPool={pegPool} rewardTokens={rewardTokens} totalRewardValue={totalRewardValue} />
                    </div>
                  </div>
                </Box>
              )}
            </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
      </Page>
    </Switch>
  );
};

export default Extinction;
