import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import styled from 'styled-components';
import diamondIcon from '../../../assets/img/Diamond.png';

const PrizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 28px 28px;
  gap: 26px;
  width: 730px;
  height: 430px;
  background: #feffeb;
  flex: none;
  order: 6;
  align-self: stretch;
  flex-grow: 0;
`;

const LotteryPrize = () => {
  return (
    <PrizeContainer>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Grid container direction="row">
            <Grid container xs={4} justifyContent="center" alignItems="center">
              <Grid item>
                <img src={diamondIcon} alt="" />
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
                    Lottery Prize
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
          Your Tickets
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
            4
          </div>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            ~$20.74
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        style={{
          gap: '219px',
          order: 2,
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
          Total Tickets
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
            271
          </div>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            ~$9,276,301
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        style={{
          gap: '219px',
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
          Ticket Price
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
            ~$5.19
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        style={{
          gap: '219px',
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
          Purchasable Tickets
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
            50 | 50
          </div>
          <div
            style={{
              textAlign: 'right',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            Deposit | Compound
          </div>
        </Grid>
      </Grid>
    </PrizeContainer>
  );
};

export default LotteryPrize;
