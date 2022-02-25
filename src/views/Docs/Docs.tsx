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
                      href="https://bscscan.com/address/0xb9E05B4C168B56F73940980aE6EF366354357009"
                      target="_blank"
                    >
                      AMES
                    </StyledLink>
                  </Typography>
                  <Typography>0xb9E05B4C168B56F73940980aE6EF366354357009</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://bscscan.com/address/0xFa4b16b0f63F5A6D0651592620D585D308F749A4"
                      target="_blank"
                    >
                      ASHARE
                    </StyledLink>
                  </Typography>
                  <Typography>0xFa4b16b0f63F5A6D0651592620D585D308F749A4</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://bscscan.com/address/0xa4F976f7099a0d7F096615DBcbcf5F9d977Ca235"
                      target="_blank"
                    >
                      ABOND
                    </StyledLink>
                  </Typography>
                  <Typography>0xa4F976f7099a0d7F096615DBcbcf5F9d977Ca235</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://bscscan.com/address/0x36d53ed6380313f3823eed2f44dddb6d1d52f656"
                      target="_blank"
                    >
                      1QSHARE
                    </StyledLink>
                  </Typography>
                  <Typography>0x36d53ed6380313f3823eed2f44dddb6d1d52f656</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://bscscan.com/address/0x1da194F8baf85175519D92322a06b46A2638A530"
                      target="_blank"
                    >
                      ASHARE reward pools
                    </StyledLink>
                  </Typography>
                  <Typography>0x1da194F8baf85175519D92322a06b46A2638A530</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://bscscan.com/address/0x2110Aa29292B44B142DD20de45dE6C418Aa28092"
                      target="_blank"
                    >
                      TaxOracle
                    </StyledLink>
                  </Typography>
                  <Typography>0x2110Aa29292B44B142DD20de45dE6C418Aa28092</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://bscscan.com/address/0x3234F20Ff819dB353f702C44337E5b3c0982a4aB"
                      target="_blank"
                    >
                      Treasury
                    </StyledLink>
                  </Typography>
                  <Typography>0x3234F20Ff819dB353f702C44337E5b3c0982a4aB</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://bscscan.com/address/0xC183b26Ad8C660AFa7B388067Fd18c1Fb28f1bB4"
                      target="_blank"
                    >
                      Boardroom
                    </StyledLink>
                  </Typography>
                  <Typography>0xC183b26Ad8C660AFa7B388067Fd18c1Fb28f1bB4</Typography>
                </Box>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://bscscan.com/address/0x298be24C55BF89B114FE66972C787ec78530fCd7"
                      target="_blank"
                    >
                      Oracle
                    </StyledLink>
                  </Typography>
                  <Typography>0x298be24C55BF89B114FE66972C787ec78530fCd7</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://bscscan.com/address/0x6b2FD2BD34676E4c312cA2F8a472e7C2d9e380e7"
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
                      href="https://bscscan.com/address/0xEE07b8Ee4D827F7EDAC3FFA7bf1a84B8c816623A"
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
                      href="https://bscscan.com/address/0xB182b5b0Cf6bDB738e9157D6a21B02d92dbf5C38"
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
                      href="https://bscscan.com/address/0xc4A0A5D5B50BAB1Ee3D37769e94cAe5B9023f1d3"
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
