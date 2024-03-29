import React, { useCallback } from 'react';
import Page from '../../components/Page';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import ExchangeCard from './components/ExchangeCard';
import styled from 'styled-components';
import useBombFinance from '../../hooks/useBombFinance';
import { useTransactionAdder } from '../../state/transactions/hooks';

import { Grid, Box, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import useAvailableAalto, {
  useAaltoPerShare,
  useMaxAaltoPerEpoch,
  useSwapEnabled,
} from '../../hooks/useAvailableAalto';
import { getDisplayBalance } from '../../utils/formatBalance';

const TITLE = 'ames.defi | Aalto swap';

const Bond: React.FC = () => {
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const bombFinance = useBombFinance();
  const addTransaction = useTransactionAdder();
  const aaltoAvailable = useAvailableAalto();
  const isSwapEnabled = useSwapEnabled();
  const maxAaltoPerEpoch = useMaxAaltoPerEpoch();
  const aaltoPerShare = useAaltoPerShare();

  const handleSwapShare = useCallback(
    async (amount: string) => {
      const tx = await bombFinance.swapShare(amount);
      addTransaction(tx, {
        summary: `Swapped ${Number(amount).toFixed(4)} ASHARES for AALTO`,
      });
    },
    [bombFinance, addTransaction],
  );

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
                        Use your <strong>$ASHARE</strong> tokens and swap them to <strong>$AALTO</strong> at a 1:
                        {getDisplayBalance(aaltoPerShare, 18, 0, true)} rate.
                        <br />
                        <br />A maximum of <strong>{getDisplayBalance(maxAaltoPerEpoch, 18, 0, true)} $AALTO</strong> is
                        available per week.
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
                        disabled={!isSwapEnabled || aaltoAvailable === 0}
                        disabledDescription="Share swap closed"
                        aaltoLeft={aaltoAvailable}
                        action="Swap"
                        fromToken={bombFinance.BSHARE}
                        fromTokenName="ASHARE"
                        toToken={bombFinance.AALTO}
                        toTokenName="AALTO"
                        onExchange={handleSwapShare}
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
