import React from 'react';
import Page from '../../components/Page';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Strategy1 from '../../assets/img/strategy1.png';
import Strategy2 from '../../assets/img/upstrat.png';

import { Grid, Box, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const TITLE = 'ames.defi | Strategy';

const Wrapper = styled.div`
  max-width: 1200px;
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
