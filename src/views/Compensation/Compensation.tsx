import React, { useCallback, useMemo } from 'react';
import Page from '../../components/Page';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import styled from 'styled-components';
import useBombFinance from '../../hooks/useBombFinance';
import { useTransactionAdder } from '../../state/transactions/hooks';

import { Grid, Box, Typography, Card, CardContent, Button } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import useCompInfo from '../../hooks/useCompInfo';
import { getDisplayBalance } from '../../utils/formatBalance';

const TITLE = 'ames.defi | Compensation';

const Compensation: React.FC = () => {
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const bombFinance = useBombFinance();
  const addTransaction = useTransactionAdder();
  const compInfo = useCompInfo();
  const canClaimReward = compInfo?.canClaim && !compInfo.canClaim.eq(0);

  const handleClaim = () => {
    claimAalto();
  };

  const claimAalto = useCallback(async () => {
    const tx = await bombFinance.claimComp();
    addTransaction(tx, {
      summary: `Claimed ${getDisplayBalance(compInfo?.canClaim)} AALTO`,
    });
  }, [bombFinance, addTransaction, compInfo?.canClaim]);

  return (
    <Switch>
      <Page>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        {!!account ? (
          <>
            <Route exact path={path}>
              <Box mt={8} mb={4}>
                <Typography
                  style={{ textTransform: 'none', fontWeight: 'bold' }}
                  color="textPrimary"
                  align="center"
                  variant="h3"
                  gutterBottom
                >
                  Loyalist redemption program
                </Typography>
                <Typography
                  style={{ textTransform: 'none' }}
                  color="textPrimary"
                  align="center"
                  variant="h5"
                  gutterBottom
                >
                  A token of appreciation
                </Typography>
              </Box>
            </Route>

            <Box mb={6}>
              <InfoWrapper>
                <InfoContent style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid spacing={4} container justifyContent="center">
                    <Grid item xs={12} md={6}>
                      <Card>
                        <CardContent style={{ padding: '32px' }}>
                          <SplitContent>
                            <Box>
                              <Typography style={{ textTransform: 'none', fontSize: '16px' }} variant="h6">
                                Total amount to claim:
                              </Typography>
                              <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                            </Box>
                            <Box>
                              <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                                {getDisplayBalance(compInfo?.total) || '0'} $AALTO
                              </Typography>
                            </Box>
                          </SplitContent>
                          <SplitContent>
                            <Box>
                              <Typography style={{ textTransform: 'none', fontSize: '16px' }} variant="h6">
                                Claimable amount:
                              </Typography>
                              <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                            </Box>
                            <Box>
                              <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                                {getDisplayBalance(compInfo?.canClaim) || '0'} $AALTO
                              </Typography>
                            </Box>
                          </SplitContent>
                          <SplitContent>
                            <Box>
                              <Typography style={{ textTransform: 'none', fontSize: '16px' }} variant="h6">
                                Claimed amount:
                              </Typography>
                              <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                            </Box>
                            <Box>
                              <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                                {getDisplayBalance(compInfo?.claimed) || '0'} $AALTO
                              </Typography>
                            </Box>
                          </SplitContent>
                          <Box mt={4}>
                            <Button
                              onClick={handleClaim}
                              className={!canClaimReward ? 'shinyButtonDisabled' : 'shinyButton'}
                              disabled={!canClaimReward}
                            >
                              Claim Reward
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </InfoContent>
              </InfoWrapper>
            </Box>
          </>
        ) : (
          <UnlockWallet />
        )}
      </Page>
    </Switch>
  );
};

const StyledBond = styled(Grid)``;

const StyledCardWrapper = styled(Grid)``;

const SplitContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 24px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 16px 0;
  }
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export default Compensation;
