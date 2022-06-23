import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Box, Container, Typography, Grid } from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import { Helmet } from 'react-helmet';
import useExtinctionPools from '../../hooks/useExtinctionPools';
import ExtinctionPoolCard from './components/ExtinctionCard';

const TITLE = 'ames.defi | Extinction';

const Extinction: React.FC = () => {
  const { account } = useWallet();
  const { path } = useRouteMatch();
  const extinctionPools = useExtinctionPools(account);

  console.log(extinctionPools);

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

                  <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    {extinctionPools?.length &&
                      extinctionPools.map((pool, i) => <ExtinctionPoolCard key={i} pool={pool} />)}
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
