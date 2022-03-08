import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Bank from '../Bank';

import { Box, Container, Typography, Grid } from '@material-ui/core';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';

import useBanks from '../../hooks/useBanks';
import { Helmet } from 'react-helmet';

const TITLE = 'ames.defi | Farms';

const Farm = () => {
  const [banks] = useBanks();
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const activeBanks = banks.filter((bank) => !bank.finished);

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
                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 2).length === 0}>
                  <Typography style={{ textTransform: 'none', fontWeight: 'bold' }} color="textPrimary" align="center" variant="h3">
                    Earn ASHARE in our Farms
                  </Typography>
                  <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 2)
                      .map((bank) => (
                        <Grid item xs="12" sm="6">
                          <React.Fragment key={bank.name}>
                            <Bank key={bank.name} bankId={bank.contract} />
                          </React.Fragment>
                        </Grid>
                      ))}
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

export default Farm;
