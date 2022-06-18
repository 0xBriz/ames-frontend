import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import styled from 'styled-components';
import TokenSymbol from '../../../components/TokenSymbol';

const PoolBalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 28px 28px;
  gap: 26px;
  width: 730px;
  height: 350px;
  background: #feffeb;
  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
`;

const PoolBalance = () => {
  return (
    <PoolBalanceContainer>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Grid container direction="row">
            <Grid container xs={4} justifyContent="center" alignItems="center">
              <Grid item>
                <TokenSymbol symbol="AMES-BUSD-LP" size={80} />
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
                    Pool Balance
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
          Total Deposited
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
            268,566.91
          </div>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            =$9,276,301
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
          Total Claimed
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
            268,566.91
          </div>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            =$9,276,301
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
          Total Users
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
            268,566.91
          </div>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            =$9,276,301
          </div>
        </Grid>
      </Grid>
    </PoolBalanceContainer>
  );
};

export default PoolBalance;
