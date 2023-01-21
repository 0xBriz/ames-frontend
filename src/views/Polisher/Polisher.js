import React, { useMemo } from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Stake from './components/Stake';
import { Box, Card, CardContent, Typography, Grid } from '@material-ui/core';
import { roundAndFormatNumber } from '../../0x';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import Value from '../../components/Value';
import useXbombBalance from '../../hooks/useXbombBalance';
import useXbombAPR from '../../hooks/useXbombAPR';
import useStakedTotalBombBalance from '../../hooks/useTotalStakedBombBalance';
import useSwapperSoldAmount from '../../hooks/useSwapperSoldAmount';
import { getDisplayBalance } from '../../utils/formatBalance';
import { Helmet } from 'react-helmet'

const TITLE = 'ames.defi | Ames - xAmes'

const Polisher = () => {
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const totalMint = useSwapperSoldAmount();

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
                  Polish AMES into xAMES
                </Typography>
                <Typography
                  style={{ textTransform: 'none', fontSize: '24px', maxWidth: '900px' }}
                  color="textPrimary"
                  align="center"
                  variant="h5"
                  gutterBottom
                >
                  xAmes is only minted when Ames is deposited into the contract.  
                </Typography>
                <div style={{display:'flex'}}>
                  <Typography 
                    style={{ textTransform: 'none', fontSize: '28px', maxWidth: '900px', margin: 'auto' }}
                    color="textPrimary"
                    align="center"
                    variant="h3"
                    gutterBottom
                  >
                      Total xAMES minted: 
                  </Typography>
                  {' '}
                  <Value value={getDisplayBalance(totalMint)} />
                </div>
              </Box>
            </Route>
            <Box mb={6}>
                {/* <Grid item xs={12} md={6}>
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
                            1 xAmes =
                          </Typography>
                          <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                        </Box>
                        <Box>
                          <Typography style={{ fontWeight: 'bold', color: 'black' }}>{xbombRate} Ames</Typography>
                        </Box>
                      </SplitContent>
                      <SplitContent>
                        <Box>
                          <Typography style={{ textTransform: 'none' }} variant="h6">
                            Ames Staked:
                          </Typography>
                          <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                        </Box>
                        <Box>
                          <Typography style={{ fontWeight: 'bold', color: 'black' }}>{bombTotalStaked}</Typography>
                        </Box>
                      </SplitContent>
                    </CardContent>
                  </Card>
                </Grid> */}
                
                  <StyledBoardroom>
                    <StyledCardsWrapper>
                      <StyledCardWrapper>
                        <Stake />
                      </StyledCardWrapper>
                    </StyledCardsWrapper>
                  </StyledBoardroom>
                
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

export default Polisher;
