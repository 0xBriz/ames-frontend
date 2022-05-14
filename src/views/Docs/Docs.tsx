import React from 'react';
import Page from '../../components/Page';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import { Grid, Box, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const TITLE = 'ames.defi | Docs';

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
                <Box mb={2}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    <StyledLink
                      href="https://bscscan.com/address/0x35e05a19f032F2be202b456ccE1dd779Be00a39e"
                      target="_blank"
                    >
                      Nodes
                    </StyledLink>
                  </Typography>
                  <Typography>0x35e05a19f032F2be202b456ccE1dd779Be00a39e</Typography>
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
                      href="https://bscscan.com/address/0x6bcC0E231A4Ac051b68DBC62F8882c04e2bA9F77"
                      target="_blank"
                    >
                      A-Team multisig
                    </StyledLink>
                  </Typography>
                  <Typography>0x6bcC0E231A4Ac051b68DBC62F8882c04e2bA9F77</Typography>
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
