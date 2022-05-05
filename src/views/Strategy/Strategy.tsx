import React from 'react';
import Page from '../../components/Page';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Strategy1 from '../../assets/img/strat.png';

import { Grid, Box, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const TITLE = 'ames.defi | Strategy';

const Wrapper = styled.div`
  max-width: 700px;
  with: 100%;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Strategy: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Page>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>

        <>
          <Route exact path={path}>
            <Box mb={6}>
              <Typography
                style={{ textTransform: 'none', fontWeight: 'bold' }}
                color="textPrimary"
                align="center"
                variant="h3"
                gutterBottom
              >
                Strategy
              </Typography>
              <Typography
                style={{ textTransform: 'none', maxWidth: '900px', margin: '24px auto' }}
                color="textPrimary"
                align="center"
                variant="h6"
                gutterBottom
              >
                For the best overall health and sustainability of Ames.Defi, take 10% profit from your $ASHARE rewards,
                and stake the rest in the Boardroom. This helps maintain the high APRs across the entire protocol. When
                you print $AMES from the boardroom, take 10% profit and reinvest the rest into the AMES-UST pool - this
                buffs up the liquidity pair and makes $AMES resistant to large price impact.
                <br /> <br /> The compounding loop will help maintain the price of $AMES and allow you to benefit from
                capital appreciation of your AMES-UST LPs.
              </Typography>
            </Box>
            <Box>
              <Wrapper>
                <Img src={Strategy1} />
              </Wrapper>
            </Box>
          </Route>
        </>
      </Page>
    </Switch>
  );
};

export default Strategy;
