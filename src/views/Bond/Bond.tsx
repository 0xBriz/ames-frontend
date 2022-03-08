import React, { useCallback, useMemo } from 'react';
import Page from '../../components/Page';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import ExchangeCard from './components/ExchangeCard';
import styled from 'styled-components';
import useBondStats from '../../hooks/useBondStats';
import useBombFinance from '../../hooks/useBombFinance';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import { useTransactionAdder } from '../../state/transactions/hooks';
import useTokenBalance from '../../hooks/useTokenBalance';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import useQuartzRedeemable from '../../hooks/useQuartzRedeemable';
import { getDisplayBalance } from '../../utils/formatBalance';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN } from '../../bomb-finance/constants';
import { Alert } from '@material-ui/lab';

import { Grid, Box, Typography, Card, CardContent } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import useCashPriceTWAP from '../../hooks/useCashPriceTWAP';

const SplitContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const TITLE = 'ames.defi | Bonds';

const Bond: React.FC = () => {
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const bombFinance = useBombFinance();
  const addTransaction = useTransactionAdder();
  const bondStat = useBondStats();
  const cashPrice = useCashPriceInLastTWAP();
  const cashPriceTWAP = useCashPriceTWAP();
  const bondsPurchasable = useBondsPurchasable();
  const quartzRedeemable = useQuartzRedeemable();
  const bondBalance = useTokenBalance(bombFinance?.BBOND);

  const handleBuyBonds = useCallback(
    async (amount: string) => {
      const tx = await bombFinance.buyBonds(amount);
      addTransaction(tx, {
        summary: `Buy ${Number(amount).toFixed(2)} ABOND with ${amount} AMES`,
      });
    },
    [bombFinance, addTransaction],
  );

  const handleRedeemBonds = useCallback(
    async (amount: string) => {
      const tx = await bombFinance.redeemBonds(amount);
      addTransaction(tx, { summary: `Redeem ${amount} ABOND` });
    },
    [bombFinance, addTransaction],
  );

  const isBondRedeemable = useMemo(() => cashPriceTWAP.gt(BOND_REDEEM_PRICE_BN), [cashPriceTWAP]);
  const isBondPurchasable = useMemo(() => Number(bondStat?.tokenInFtm) < 1.01, [bondStat]);
  const isBondPayingPremium = useMemo(() => Number(bondStat?.tokenInFtm) >= 1.1, [bondStat]);

  return (
    <Switch>
      <Page>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        {!!account ? (
          <>
            <Route exact path={path}>
              <Box mb={4}>
                <Typography
                  style={{ textTransform: 'none', fontWeight: 'bold' }}
                  color="textPrimary"
                  align="center"
                  variant="h3"
                  gutterBottom
                >
                  Buy &amp; Redeem Bonds
                </Typography>
                <Typography
                  style={{ textTransform: 'none' }}
                  color="textPrimary"
                  align="center"
                  variant="h5"
                  gutterBottom
                >
                  Earn premiums upon redemption
                </Typography>
              </Box>
            </Route>

            <Box mb={6}>
              <InfoWrapper>
                <InfoContent style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid spacing={4} container>
                    <Grid justifyContent="center" style={{ display: 'flex' }} direction="column" item xs={12} md={6}>
                      <Typography style={{ textAlign: 'left', textTransform: 'none' }}>
                        Purchasing ABONDs contributes to bringing AMES back to peg by burning the amount being sold. You
                        can purchase ABONDS when <strong>Current TWAP Price </strong>
                        is below <strong>$1.00</strong>.<br />
                        <br /> After AMES regains it's peg and <strong>Current TWAP Price </strong>
                        is above <strong>$1.01</strong>, redeeming becomes available.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card>
                        <CardContent style={{ padding: '32px' }}>
                          <SplitContent>
                            <Box>
                              <Typography style={{ textTransform: 'none', fontSize: '16px' }} variant="h6">
                                Current TWAP Price
                              </Typography>
                              <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                            </Box>
                            <Box>
                              <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                                ${getDisplayBalance(cashPriceTWAP, 18, 2) || '-'}
                              </Typography>
                            </Box>
                          </SplitContent>
                          <SplitContent>
                            <Box>
                              <Typography style={{ textTransform: 'none', fontSize: '16px' }} variant="h6">
                                Last hour TWAP Price
                              </Typography>
                              <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                            </Box>
                            <Box>
                              <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                                ${getDisplayBalance(cashPrice, 18, 2) || '-'}
                              </Typography>
                            </Box>
                          </SplitContent>
                          <SplitContent>
                            <Box>
                              <Typography style={{ textTransform: 'none', fontSize: '16px' }} variant="h6">
                                ABOND Price:
                              </Typography>
                              <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                            </Box>
                            <Box>
                              <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                                ${Number(bondStat?.tokenInFtm).toFixed(2) || '-'}
                              </Typography>
                            </Box>
                          </SplitContent>
                          <SplitContent>
                            <Box>
                              <Typography style={{ textTransform: 'none', fontSize: '16px' }} variant="h6">
                                ABONDs available to purchase:
                              </Typography>
                              <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                            </Box>
                            <Box>
                              <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                                {getDisplayBalance(bondsPurchasable, 18, 2)}
                              </Typography>
                            </Box>
                          </SplitContent>
                          <SplitContent>
                            <Box>
                              <Typography style={{ textTransform: 'none', fontSize: '16px' }} variant="h6">
                                AMES available to redeem:
                              </Typography>
                              <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                            </Box>
                            <Box>
                              <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                                {getDisplayBalance(quartzRedeemable, 18, 2)}
                              </Typography>
                            </Box>
                          </SplitContent>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </InfoContent>
              </InfoWrapper>
            </Box>
            {isBondPayingPremium === false && bondStat?.tokenInFtm !== undefined ? (
              <Box mb={2}>
                <Grid container>
                  <Grid item xs={12} sm={12} justify="center" style={{ margin: '18px', display: 'flex' }}>
                    <Alert variant="filled" severity="error">
                      <b>Claiming below 1.1 peg will not receive a redemption bonus, claim wisely!</b>
                    </Alert>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <></>
            )}
            <InfoWrapper>
              <InfoContent style={{ display: 'flex', alignItems: 'center', maxWidth: '70%' }}>
                <StyledBond container spacing={4}>
                  <StyledCardWrapper item xs={12} md={6}>
                    <ExchangeCard
                      action="Purchase"
                      fromToken={bombFinance.BOMB}
                      fromTokenName="AMES"
                      toToken={bombFinance.BBOND}
                      toTokenName="ABOND"
                      priceDesc={
                        !isBondPurchasable
                          ? 'AMES is over peg'
                          : getDisplayBalance(bondsPurchasable, 18, 4) + ' ABOND available for purchase'
                      }
                      onExchange={handleBuyBonds}
                      disabled={!bondStat || isBondRedeemable || bondsPurchasable.eq(0)}
                    />
                  </StyledCardWrapper>
                  <StyledCardWrapper item xs={12} md={6}>
                    <ExchangeCard
                      action="Redeem"
                      fromToken={bombFinance.BBOND}
                      fromTokenName="ABOND"
                      toToken={bombFinance.BOMB}
                      toTokenName="AMES"
                      priceDesc={`${getDisplayBalance(quartzRedeemable, 18, 4)} AMES available to redeem`}
                      onExchange={handleRedeemBonds}
                      disabled={!bondStat || bondBalance.eq(0) || !isBondRedeemable || quartzRedeemable.eq(0)}
                      disabledDescription={!isBondRedeemable ? `Enabled when 1 AMES > ${BOND_REDEEM_PRICE}UST` : null}
                    />
                  </StyledCardWrapper>
                </StyledBond>
              </InfoContent>
            </InfoWrapper>
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

export default Bond;
