import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import styled from 'styled-components';
import topIcon from '../../../assets/img/Top.png';

const TopDepositContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 28px 28px;
  gap: 26px;
  width: 730px;
  height: 190px;
  background: #feffeb;
  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
`;

const TopDeposit = () => {
  return (
    <TopDepositContainer>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Grid container direction="row">
            <Grid container xs={4} justifyContent="center" alignItems="center">
              <Grid item>
                <img src={topIcon} alt="Top Depositor" />
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
                    Top Deposit Prize
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
                    715.18
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
                    ~$25,779.10
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
            paddingLeft: '20px',
            marginTop: '20px',
          }}
          alignItems="center"
        >
          0x0123...4567
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
            7.82
          </div>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            ~$281.74
          </div>
        </Grid>
      </Grid>
    </TopDepositContainer>
  );
};

export default TopDeposit;
