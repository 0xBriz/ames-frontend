import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import Page from '../../../components/Page';
import styled from 'styled-components';
import PoolBalance from './PoolBalance';
import TopDeposit from './TopDeposit';
import LotteryPrize from './LotteryPrize';
import UserWinnings from './UserWinnings';
import UserDeposits from './UserDeposits';
import UserRewards from './UserRewards';

const ViewToggle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 254px;
  height: 52px;

  /* Q/bege */

  background: #feffeb;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
`;

const CrawlButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 127px;
  height: 52px;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  & span {
    font-size: '16px';
    line-height: '24px';
    font-weight: 600;
    color: #495057;
  }
`;

const CavernCrawl = () => {
  const [holder, setHolder] = useState(null);

  return (
    <Switch>
      <Page>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item justifyContent="center">
            <h3
              style={{
                fontSize: '60px',
                lineHeight: '72px',
                letterSpacing: '0.0075em',
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              Cavern Crawl
            </h3>
          </Grid>
          <Grid item justifyContent="center">
            <span
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '0.4px',
                fontWeight: 700,
                textAlign: 'center',
                textTransform: 'uppercase',
                marginTop: '24px',
                display: 'inline-block',
              }}
            >
              Deposit your AMES-BUSD LP INTO the pool and earn back 365%
            </span>
          </Grid>
          <Grid item justifyContent="center">
            <span
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                fontWeight: 500,
                textAlign: 'center',
                marginTop: '40px',
                display: 'inline-block',
              }}
            >
              Try your luck on and take the chance of finding lucky gems on the Cavern Crawl.
            </span>
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            top: '232px',
            left: '152px',
          }}
        >
          <Grid container justifyContent="center">
            <div
              style={{
                height: '128px',
                width: '426px',
                background: '#FEFFEB',
                fontWeight: 500,
                padding: '24px 28px',
                gap: '4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '40px',
              }}
            >
              <div
                style={{
                  height: '14px',
                  width: '370px',
                  borderRadius: '10px',
                  background: '#DEE2E6',
                }}
              >
                <span
                  style={{
                    height: '14px',
                    width: '52px',
                    borderRadius: '10px',
                    position: 'absolute',
                    background: '#BCFF99',
                  }}
                ></span>
              </div>

              <div
                style={{
                  height: '64px',
                  width: '370px',
                  fontSize: '48px',
                  lineHeight: '64px',
                  fontWeight: 700,
                  marginTop: '4px',
                  order: 1,
                }}
              >
                ⛰ 1h 21m 13s ⛰
              </div>

              <div
                style={{
                  height: '24px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 600,
                  textAlign: 'center',
                  color: '#495057',
                  marginTop: '4px',
                  order: 2,
                }}
              >
                Daily Gems @ 8:00pm UTC
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            marginTop: '40px',
          }}
        >
          <Grid container justifyContent="center">
            <ViewToggle>
              <CrawlButton
                style={{
                  background: '#bcff99',
                }}
              >
                <span>Crawl</span>
              </CrawlButton>
              <CrawlButton>
                <span>Ranking</span>
              </CrawlButton>
            </ViewToggle>
          </Grid>

          <Grid
            container
            justifyContent="center"
            style={{
              marginTop: '40px',
            }}
          >
            <PoolBalance />
          </Grid>

          <Grid
            container
            justifyContent="center"
            style={{
              marginTop: '40px',
            }}
          >
            <TopDeposit />
          </Grid>

          <Grid
            container
            justifyContent="center"
            style={{
              marginTop: '40px',
            }}
          >
            <LotteryPrize />
          </Grid>

          <Grid
            container
            justifyContent="center"
            style={{
              marginTop: '40px',
            }}
          >
            <UserWinnings />
          </Grid>

          <Grid
            container
            justifyContent="center"
            style={{
              marginTop: '40px',
            }}
          >
            <UserDeposits />
          </Grid>

          <Grid
            container
            justifyContent="center"
            style={{
              marginTop: '40px',
            }}
          >
            <UserRewards />
          </Grid>
        </Grid>
      </Page>
    </Switch>
  );
};

export default CavernCrawl;
