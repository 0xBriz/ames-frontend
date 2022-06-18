import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import styled from 'styled-components';

const DepositsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 28px 28px;
  gap: 26px;
  width: 730px;
  height: 520px;
  background: #feffeb;
  flex: none;
  order: 8;
  align-self: stretch;
  flex-grow: 0;
`;

const ActionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 315px;
  height: 32px;
  background: #bcff99;
  border-radius: 8px;
`;

const UserDeposits = () => {
  return (
    <DepositsContainer>
      <Grid
        container
        justifyContent="space-between"
        style={{
          gap: '130px',
        }}
      >
        <Grid item>
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
                You've Deposited
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
                66.91
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
                ~76,301
              </span>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" justifyContent="center" alignItems="flex-end">
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
                You've Claimed
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
                0.00
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
                ~$0.00
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        style={{
          gap: '130px',
        }}
      >
        <Grid item>
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
                MAX PAYOUT
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
                268,566.91
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
                ~$9,276,301
              </span>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" justifyContent="center" alignItems="flex-end">
            <Grid item>
              <span
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#B2552A',
                  letterSpacing: '2px',
                }}
              >
                Daily Burst
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
                6.91
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
                ~$301
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        style={{
          gap: '130px',
        }}
      >
        <Grid item>
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
                Multiplier
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
                1.00
              </span>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" justifyContent="center" alignItems="flex-end">
            <Grid item>
              <div
                style={{
                  fontSize: '14px',
                  lineHeight: '24px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#B2552A',
                  letterSpacing: '2px',
                }}
              >
                SHARE
              </div>
            </Grid>
            <Grid item>
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '40px',
                  lineHeight: '48px',
                  fontWeight: 700,
                  paddingTop: '10px',
                }}
              >
                0.00
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        style={{
          marginTop: '25px',
        }}
      >
        <Grid item>
          <span
            style={{
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '28px',
              color: '#FC6F57',
            }}
          >
            Do we need a referral link?
          </span>
        </Grid>
      </Grid>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          height: '64px',
          gap: '24px',
        }}
      >
        <ActionButton>
          <span
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 600,
            }}
          >
            Zap In
          </span>
        </ActionButton>

        <ActionButton>
          <span
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 600,
            }}
          >
            Deposit
          </span>
        </ActionButton>
      </div>
    </DepositsContainer>
  );
};

export default UserDeposits;
