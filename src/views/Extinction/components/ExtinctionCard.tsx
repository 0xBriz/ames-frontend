import React from 'react';
import { Box, Button, Card, CardContent, Typography, Grid } from '@material-ui/core';
import TokenSymbol from '../../../components/TokenSymbol';
import { ExtinctionPoolInfo } from '../../../bomb-finance/types';

const ExtinctionPoolCard: React.FC<{ pool: ExtinctionPoolInfo }> = ({ pool }) => {
  console.log(pool);

  return (
    <Grid item xs={12} md={4} lg={4}>
      {pool && (
        <Card variant="outlined">
          <CardContent>
            <Box style={{ position: 'relative' }}>
              <Box
                style={{
                  position: 'absolute',
                  right: '0px',
                  top: '-5px',
                  height: '48px',
                  width: '48px',
                  borderRadius: '40px',
                  backgroundColor: '#363746',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <TokenSymbol size={32} symbol={pool.depositTokenName} />
              </Box>
              <Typography variant="h5" component="h2">
                {pool.depositTokenName}
              </Typography>
              <Typography color="textSecondary">
                Deposit {pool.depositTokenName.toUpperCase()} Earn{' '}
                {pool.rewardTokens?.map((tk, i) => {
                  return <div key={i}>{tk.name}</div>;
                })}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Grid>
  );
};

export default ExtinctionPoolCard;
