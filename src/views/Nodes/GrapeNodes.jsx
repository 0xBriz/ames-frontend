import { Grid } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from '../../components/Page';
import GrapeNode from '../GrapeNode';
import GrapeCard from './GrapeCard';
import ShareCard from './ShareCard';

const GrapeNodes = () => {
  const { path } = useRouteMatch();
  return (
    <Page>
      <Switch>
        <Route exact path={path}>
          <h2 style={{ fontSize: '60px', textAlign: 'center' }}>NODES</h2>
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            <GrapeCard />
            <ShareCard />
          </Grid>
        </Route>
        <Route path={`${path}/:bankId`}>
          <GrapeNode />
        </Route>
      </Switch>
    </Page>
  );
};

export default GrapeNodes;
