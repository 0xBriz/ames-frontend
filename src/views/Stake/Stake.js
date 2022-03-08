import React, { useMemo } from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Stake from './components/Stake';
import { Box, Card, CardContent, Typography, Grid } from '@material-ui/core';
import { roundAndFormatNumber } from '../../0x';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import useXbombBalance from '../../hooks/useXbombBalance';
import useXbombAPR from '../../hooks/useXbombAPR';
import useStakedTotalBombBalance from '../../hooks/useTotalStakedBombBalance';
import { Helmet } from 'react-helmet'

const TITLE = 'ames.defi | xQUARTZ - QUARTZ Staking'

const Staking = () => {
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const xbombBalance = useXbombBalance();
  const xbombRate = Number(xbombBalance / 1000000000000000000).toFixed(2);
  const xbombAPR = useXbombAPR();
  const stakedTotalBombBalance = useStakedTotalBombBalance();
  const bombTotalStaked = Number(stakedTotalBombBalance / 1000000000000000000).toFixed(2);
  const xbombTVL = useMemo(() => (xbombAPR ? Number(xbombAPR.TVL).toFixed(2) : null), [xbombAPR]);

  return (
    <Switch>
      <Page>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        {!!account ? (
          <>
            <Route exact path={path}>
              <Box mt={8} mb={4} display="flex" flexDirection="column" alignItems="center">
                <Typography
                  style={{ textTransform: 'none', fontWeight: 'bold', marginBottom: '32px' }}
                  color="textPrimary"
                  align="center"
                  variant="h3"
                  gutterBottom
                >
                  Stake QUARTZ, get xQUARTZ
                </Typography>
                <Typography
                  style={{ textTransform: 'none', fontSize: '24px', maxWidth: '900px' }}
                  color="textPrimary"
                  align="center"
                  variant="h5"
                  gutterBottom
                >
                  xQUARTZ is only minted when QUARTZ is deposited into the contract.  Any time QUARTZ is sent to the xQUARTZ smart contract as rewards, it will increase the ratio of QUARTZ to xQUARTZ, generating a yield for all xQUARTZ holders.
                </Typography>
              </Box>
            </Route>
            <Box mb={6}>
              <Grid spacing={6} container>
                <Grid item xs={12} md={6}>
                  <Card style={{ padding: '16px' }}>
                    <CardContent>
                      <Typography
                        variant="h5"
                        style={{ fontSize: '18px', textTransform: 'none', textAlign: 'center', marginBottom: '8px' }}
                      >
                        total value locked:
                      </Typography>
                      <Typography
                        style={{
                          color: 'black',
                          textTransform: 'uppercase',
                          textAlign: 'center',
                          fontWeight: 'bold',
                          marginBottom: '24px',
                          fontSize: '32px',
                        }}
                      >
                        {`$${xbombTVL ? roundAndFormatNumber(xbombTVL, 2) : '0.00'}`}
                      </Typography>
                      <SplitContent>
                        <Box>
                          <Typography style={{ textTransform: 'none' }} variant="h6">
                            1 xQUARTZ =
                          </Typography>
                          <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                        </Box>
                        <Box>
                          <Typography style={{ fontWeight: 'bold', color: 'black' }}>{xbombRate} QUARTZ</Typography>
                        </Box>
                      </SplitContent>
                      <SplitContent>
                        <Box>
                          <Typography style={{ textTransform: 'none' }} variant="h6">
                            QUARTZ Staked:
                          </Typography>
                          <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                        </Box>
                        <Box>
                          <Typography style={{ fontWeight: 'bold', color: 'black' }}>{bombTotalStaked}</Typography>
                        </Box>
                      </SplitContent>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledBoardroom>
                    <StyledCardsWrapper>
                      <StyledCardWrapper>
                        <Stake />
                      </StyledCardWrapper>
                    </StyledCardsWrapper>
                  </StyledBoardroom>
                </Grid>
              </Grid>
            </Box>
          </>
        ) : (
          <UnlockWallet />
        )
        }
      </Page >
    </Switch>
  );
};

const StyledBoardroom = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SplitContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Staking;
