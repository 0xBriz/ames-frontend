import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Bank from '../Bank';
import { Box, Container, Typography, Grid, Link } from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import useBanks from '../../hooks/useBanks';
import { Helmet } from 'react-helmet';
import { Alert, AlertTitle } from '@material-ui/lab';
import styled from 'styled-components';

const TITLE = 'ames.defi | Farms';

const AlertLink = styled(Link)`
  text-decoration: underline !important;
  font-weight: bold;

  &:visited {
    color: inherit;
  }
`

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
                  <Typography
                    style={{ textTransform: 'none', fontWeight: 'bold' }}
                    color="textPrimary"
                    align="center"
                    variant="h3"
                  >
                    Earn ASHARE in our Farms
                  </Typography>

                  <Box marginX={'auto'} pt={2}>
                    <Alert severity='info'>
                      <AlertTitle>
                        ASHARE allocations have now been directed to the&nbsp;
                        <AlertLink href="https://www.aequinox.exchange/#/pool/0x9aa867870d5775a3c155325db0cb0b116bbf4b6a000200000000000000000002" target="_blank">AMES-BUSD</AlertLink>
                        &nbsp;and&nbsp;
                        <AlertLink href="https://www.aequinox.exchange/#/pool/0x74154c70f113c2b603aa49899371d05eeedd1e8c000200000000000000000003" target="_blank">ASHARE-BUSD</AlertLink> 
                        &nbsp;pools on&nbsp;
                        <AlertLink href="https://www.aequinox.exchange/" target={'_blank'}>Aequinox</AlertLink>!
                      </AlertTitle>
                      Single Stake AMES and the Peg Campaign Pool will still receive ASHARE, but the farms on ames.defi website will no longer emit ASHARE. 
                      Please move your CAKE LPs over to the Aequinox via <AlertLink href="https://www.ames-defi.app/migrator" target="_blank">our migrator</AlertLink>. Don't forget to stake your APTs after migrating to start farming AEQ + ASHARE!
                    </Alert>
                  </Box>

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
