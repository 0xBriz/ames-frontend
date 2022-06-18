import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import styled from 'styled-components';
import winningsIcon from '../../../assets/img/Winnings.png';

const WinningsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 28px 28px;
  gap: 26px;
  width: 730px;
  height: 400px;
  background: #feffeb;
  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
`;

const UserWinnings = () => {
  return (
    <WinningsContainer>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Grid container direction="row">
            <Grid container xs={4} justifyContent="center" alignItems="center">
              <Grid item>
                <img src={winningsIcon} alt="" />
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                <Grid item>
                  <span
                    style={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      alignSelf: 'stretch',
                      color: '#B2552A',
                      letterSpacing: '2px',
                    }}
                  >
                    Your Winnings
                  </span>
                </Grid>
                <Grid item>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '40px',
                      lineHeight: '48px',
                      fontWeight: 700,
                      paddingTop: '10px',
                    }}
                  >
                    1.20
                  </span>
                </Grid>
                <Grid item>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontWeight: 400,
                      color: '#495057',
                    }}
                  >
                    ~$20.74
                  </span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        style={{
          gap: '219px',
          order: 1,
        }}
      >
        <Grid
          item
          style={{
            color: '#495057',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '28px',
          }}
        >
          Top Deposit Rewards
        </Grid>
        <Grid item>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '28px',
            }}
          >
            1.20
          </div>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            =$20.74
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        style={{
          gap: '219px',
          order: 1,
        }}
      >
        <Grid
          item
          style={{
            color: '#495057',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '28px',
          }}
        >
          Lottery Rewards
        </Grid>
        <Grid item>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '28px',
            }}
          >
            3.06
          </div>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            =$576,301
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        style={{
          gap: '219px',
          order: 1,
        }}
      >
        <Grid
          item
          style={{
            color: '#495057',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '28px',
          }}
        >
          Referral Rewards
        </Grid>
        <Grid item>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '28px',
            }}
          >
            0.15
          </div>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            =$5.19
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        style={{
          gap: '219px',
          order: 1,
        }}
      >
        <Grid
          item
          style={{
            color: '#495057',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '28px',
          }}
        >
          Num Referrals
        </Grid>
        <Grid item>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '28px',
            }}
          >
            0
          </div>
        </Grid>
      </Grid>
    </WinningsContainer>
  );
};

export default UserWinnings;
