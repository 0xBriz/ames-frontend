import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent } from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import { Helmet } from 'react-helmet';
import useExtinctionPools from '../../hooks/useExtinctionPools';
import ExtinctionPoolCard from './components/ExtinctionCard';
import ExtinctionRewardCard from './components/ExtinctionRewardCard';

const TITLE = 'ames.defi | Extinction';

const Extinction: React.FC = () => {
  const { account } = useWallet();
  const { path } = useRouteMatch();
  const extinctionPools = useExtinctionPools();

  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <Helmet>
            <title>{TITLE}</title>
          </Helmet>
          {!!account ? (
            <Container maxWidth="lg">
              <Box mt={5}>
                <div>
                  <Typography
                    style={{ textTransform: 'none', fontWeight: 'bold' }}
                    color="textPrimary"
                    align="center"
                    variant="h3"
                  >
                    AMES Peg Campaign
                  </Typography>
                  <Typography
                    style={{ textTransform: 'none', fontWeight: 'bold', marginTop: '10px' }}
                    color="textPrimary"
                    align="center"
                  >
                    100% of deposits will be entered into the Cavern Crawl for Protocol Owned Liquidity.
                  </Typography>

                  <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                    <Grid item>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography style={{ fontWeight: 'bold' }} color="textPrimary" align="center">
                            Days H M S
                          </Typography>

                          <Typography
                            align="center"
                            style={{
                              color: 'rgb(130, 130, 130)',
                              marginTop: '10px',
                            }}
                          >
                            Until deposits close
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="space-evenly" style={{ marginTop: '20px' }}>
                    <Grid item>
                      {extinctionPools?.length &&
                        extinctionPools.map((pool, i) => <ExtinctionPoolCard key={i} pool={pool} />)}
                    </Grid>

                    <Grid item>
                      {extinctionPools?.length && <ExtinctionRewardCard rewards={extinctionPools[0].rewardTokens} />}
                    </Grid>
                  </Grid>
                </div>
              </Box>
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
