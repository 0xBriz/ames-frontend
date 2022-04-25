import React, { useCallback, useMemo } from 'react';
import Page from '../../components/Page';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import ExchangeCard from './components/ExchangeCard';
import styled from 'styled-components';
import useBondStats from '../../hooks/useBondStats';
import useBombFinance from '../../hooks/useBombFinance';
import { useTransactionAdder } from '../../state/transactions/hooks';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import { BOND_REDEEM_PRICE_BN } from '../../bomb-finance/constants';

import { Grid, Box, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import useCashPriceTWAP from '../../hooks/useCashPriceTWAP';

const TITLE = 'ames.defi | Aalto swap';

const Bond: React.FC = () => {
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const bombFinance = useBombFinance();
  const addTransaction = useTransactionAdder();
  const bondStat = useBondStats();
  const cashPriceTWAP = useCashPriceTWAP();
  const bondsPurchasable = useBondsPurchasable();

  const handleSwapShare = useCallback(
    async (amount: string) => {
      const tx = await bombFinance.swapShare(amount);
      addTransaction(tx, {
        summary: `Swapped ${Number(amount).toFixed(4)} ASHARES for AALTO`,
      });
    },
    [bombFinance, addTransaction],
  );

  const isBondRedeemable = useMemo(() => cashPriceTWAP.gt(BOND_REDEEM_PRICE_BN), [cashPriceTWAP]);

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
                  $Aalto Swapper
                </Typography>
              </Box>
            </Route>

            <Box mb={6}>
              <InfoWrapper>
                <InfoContent style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid spacing={4} container>
                    <Grid justifyContent="center" style={{ display: 'flex' }} direction="column" item xs={12} md={6}>
                      <Typography style={{ textAlign: 'left', textTransform: 'none' }}>
                        <strong>The Aalto Protocol</strong> is a decentralized capital gains system on the Binance Smart
                        Chain that rewards users for holding the token, with the added functionality of earning yield on
                        top of yield.
                        <br />
                        <br />
                        Use your <strong>$ASHARE</strong> tokens and swap them to <strong>$AALTO</strong> at a 1:2 rate.
                        <br />
                        <br />
                        <a
                          style={{ color: 'black' }}
                          href="https://aalto-defi.notion.site/aalto-defi/Aalto-Protocol-71fa023fc7824a959b73734b94ad9f38"
                          target="_blank"
                        >
                          Learn more about $AALTO
                        </a>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <ExchangeCard
                        action="Swap"
                        fromToken={bombFinance.BSHARE}
                        fromTokenName="ASHARE"
                        toToken={bombFinance.AALTO}
                        toTokenName="AALTO"
                        onExchange={handleSwapShare}
                        disabled={!bondStat || isBondRedeemable || bondsPurchasable.eq(0)}
                      />
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
