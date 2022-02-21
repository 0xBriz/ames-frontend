import React from 'react';
import Page from '../../components/Page';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import { Grid, Box, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const TITLE = 'quartz.defi | Docs';

const StyledLink = styled.a`
  text-decoration: underline;
  color: inherit;
`;

const Docs: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Page>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>

        <>
          <Route exact path={path}>
            <Box mb={4}>
              <Typography
                style={{ textTransform: 'none', fontWeight: 'bold' }}
                color="textPrimary"
                align="left"
                variant="h3"
                gutterBottom
              >
                Our addresses
              </Typography>
            </Box>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0xb9E05B4C168B56F73940980aE6EF366354357009"
                      target="_blank"
                    >
                      QUARTZ
                    </StyledLink>
                  </Typography>
                  <Typography>0xb9E05B4C168B56F73940980aE6EF366354357009</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0xFa4b16b0f63F5A6D0651592620D585D308F749A4"
                      target="_blank"
                    >
                      QSHARE
                    </StyledLink>
                  </Typography>
                  <Typography>0xFa4b16b0f63F5A6D0651592620D585D308F749A4</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0x5A12bc3Ad86c674a50fae82510DcB03751ab218b"
                      target="_blank"
                    >
                      QBOND
                    </StyledLink>
                  </Typography>
                  <Typography>0x5A12bc3Ad86c674a50fae82510DcB03751ab218b</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0xCa1dd590C3ceBa9F57E05540B91AB3F0Ed08580a"
                      target="_blank"
                    >
                      XQUARTZ
                    </StyledLink>
                  </Typography>
                  <Typography>0xCa1dd590C3ceBa9F57E05540B91AB3F0Ed08580a</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0x1da194F8baf85175519D92322a06b46A2638A530"
                      target="_blank"
                    >
                      QSHARE reward pools
                    </StyledLink>
                  </Typography>
                  <Typography>0x1da194F8baf85175519D92322a06b46A2638A530</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0x24866b121217F391b0079348146Ea139d7Fd77c7"
                      target="_blank"
                    >
                      TaxOracle
                    </StyledLink>
                  </Typography>
                  <Typography>0x24866b121217F391b0079348146Ea139d7Fd77c7</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0xFc0B7c105A6dd49Fd956b607CA8c8f00Ed159353"
                      target="_blank"
                    >
                      Treasury
                    </StyledLink>
                  </Typography>
                  <Typography>0xFc0B7c105A6dd49Fd956b607CA8c8f00Ed159353</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0xE1E48d3476027af9dC92542b3a60F2D45A36e082"
                      target="_blank"
                    >
                      Boardroom
                    </StyledLink>
                  </Typography>
                  <Typography>0xE1E48d3476027af9dC92542b3a60F2D45A36e082</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0x543AB16f3EDe6dDD26a7C182869a282618B0891C"
                      target="_blank"
                    >
                      Oracle
                    </StyledLink>
                  </Typography>
                  <Typography>0x543AB16f3EDe6dDD26a7C182869a282618B0891C</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0x6b2FD2BD34676E4c312cA2F8a472e7C2d9e380e7"
                      target="_blank"
                    >
                      Deployer
                    </StyledLink>
                  </Typography>
                  <Typography>0x6b2FD2BD34676E4c312cA2F8a472e7C2d9e380e7</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0xEE07b8Ee4D827F7EDAC3FFA7bf1a84B8c816623A"
                      target="_blank"
                    >
                      Dao Fund
                    </StyledLink>
                  </Typography>
                  <Typography>0xEE07b8Ee4D827F7EDAC3FFA7bf1a84B8c816623A</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0xB182b5b0Cf6bDB738e9157D6a21B02d92dbf5C38"
                      target="_blank"
                    >
                      Dev wallet
                    </StyledLink>
                  </Typography>
                  <Typography>0xB182b5b0Cf6bDB738e9157D6a21B02d92dbf5C38</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://explorer.harmony.one/address/0xc4A0A5D5B50BAB1Ee3D37769e94cAe5B9023f1d3"
                      target="_blank"
                    >
                      Team wallet
                    </StyledLink>
                  </Typography>
                  <Typography>0xc4A0A5D5B50BAB1Ee3D37769e94cAe5B9023f1d3</Typography>
                </Box>
              </Grid>
            </Grid>
          </Route>
        </>
      </Page>
    </Switch>
  );
};

export default Docs;
