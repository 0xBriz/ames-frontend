import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { ExtinctionPoolInfo } from '../../../bomb-finance/types';
import useExtinctionTime from '../../../hooks/useExtinctionTimes';

const ExtinctionTimer: React.FC<{ pool: ExtinctionPoolInfo }> = ({ pool }) => {
  const { poolEndTime, lockTime } = useExtinctionTime(pool);

  return (
    <Grid container justifyContent="space-evenly" style={{ marginTop: '20px' }}>
      <Grid item style={{ marginTop: '10px' }}>
        <Card variant="outlined">
          <CardContent>
            {lockTime && (
              <Typography style={{ fontWeight: 'bold' }} color="textPrimary" align="center">
                {/* {lockTime.days}D {lockTime.hours}H {lockTime.minutes}M {lockTime.seconds}S{' '} */}
                0D 0H 0M 0S{' '}
              </Typography>
            )}

            <Typography
              align="center"
              style={{
                color: 'rgb(130, 130, 130)',
                marginTop: '10px',
              }}
            >
              Until deposits close and rewards start
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item style={{ marginTop: '10px' }}>
        <Card variant="outlined">
          <CardContent>
            {poolEndTime && (
              <Typography style={{ fontWeight: 'bold' }} color="textPrimary" align="center">
                {poolEndTime.days}D {poolEndTime.hours}H {poolEndTime.minutes}M {poolEndTime.seconds}S{' '}
              </Typography>
            )}

            <Typography
              align="center"
              style={{
                color: 'rgb(130, 130, 130)',
                marginTop: '10px',
              }}
            >
              Until pool ends
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ExtinctionTimer;
