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

const TITLE = 'ames.defi | Peg Pool';

const Extinction: React.FC = () => {
  const { account } = useWallet();
  const { path } = useRouteMatch();
  const { pegPool } = usePegPool();
  const { rewardTokens } = usePegPoolRewards();

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
                  <div>
                    <Typography
                      style={{ textTransform: 'none', fontWeight: 'bold' }}
                      color="textPrimary"
                      align="center"
                      variant="h3"
                    >
                      AMES Peg Pool
                    </Typography>

                    <Typography
                      style={{ textTransform: 'none', fontWeight: 'bold' }}
                      color="textPrimary"
                      align="center"
                      variant="h5"
                    >
                      Total Deposits: {pegPool.totalDesposits}
                    </Typography>

                    <div
                      style={{
                        marginTop: '35px',
                      }}
                    >
                      <PegPoolInfo pegPool={pegPool} rewardTokens={rewardTokens} />
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
