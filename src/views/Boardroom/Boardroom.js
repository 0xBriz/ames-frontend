import React, { useMemo } from 'react';
import { useWallet } from 'use-wallet';
import moment from 'moment';
import styled from 'styled-components';
import Spacer from '../../components/Spacer';
import Harvest from './components/Harvest';
import Stake from './components/Stake';

import { Box, Button, Typography, Grid, Card, CardContent } from '@material-ui/core';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';

import useRedeemOnBoardroom from '../../hooks/useRedeemOnBoardroom';
import useStakedBalanceOnBoardroom from '../../hooks/useStakedBalanceOnBoardroom';
import { getDisplayBalance } from '../../utils/formatBalance';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useFetchBoardroomAPR from '../../hooks/useFetchBoardroomAPR';
import useBoardroomTotalValueLocked from '../../hooks/useBoardroomTotalValueLocked';

import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import useClaimRewardCheck from '../../hooks/boardroom/useClaimRewardCheck';
import useWithdrawCheck from '../../hooks/boardroom/useWithdrawCheck';
import ProgressCountdown from './components/ProgressCountdown';
import { Helmet } from 'react-helmet';

const TITLE = 'quartz.defi | Boardroom';

const SplitContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Boardroom = () => {
  const { account } = useWallet();
  const { onRedeem } = useRedeemOnBoardroom();
  const stakedBalance = useStakedBalanceOnBoardroom();
  const currentEpoch = useCurrentEpoch();
  const cashStat = useCashPriceInEstimatedTWAP();
  const totalStaked = useTotalStakedOnBoardroom();
  const boardroomAPR = useFetchBoardroomAPR();
  const canClaimReward = useClaimRewardCheck();
  const canWithdraw = useWithdrawCheck();
  const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
  const { to } = useTreasuryAllocationTimes();
  const boardroomTVL = useBoardroomTotalValueLocked();

  return (
    <Page>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {!!account ? (
        <>
          <Box mt={4}>
            <Grid style={{ maxWidth: '90%', margin: '0 auto' }} container justify="center" spacing={10}>
              <Grid style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'center' }} item xs={12} sm={6}>
                <Typography style={{ marginBottom: '16px', fontWeight: 'bold', textTransform: 'none' }} color="textPrimary" align="center" variant="h3" gutterBottom>
                  Boardroom
                </Typography>
                <Typography style={{ color: 'black', textAlign: 'left', fontSize: '18px' }}>
                  This is where our members sit around and stake their ASHAREs for AMES expansion rewards. As long as the time-weighted average price (TWAP) of AMES is $1.01 or higher, new tokens will be minted when an epoch passes.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card style={{ padding: '16px' }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      style={{ fontSize: '18px', textTransform: 'none', textAlign: 'center', marginBottom: '8px' }}
                    >
                      total value locked:
                    </Typography>
                    <Typography
                      style={{
                        color: 'black',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginBottom: '24px',
                        fontSize: '32px',
                      }}
                    >
                      {`$${boardroomTVL ? boardroomTVL.toFixed(2) : '0.00'}`}
                    </Typography>
                    <SplitContent>
                      <Box>
                        <Typography style={{ textTransform: 'none' }} variant="h6">
                          Epoch:
                        </Typography>
                      </Box>
                      <Box>
                        <Typography style={{ fontWeight: 'bold', color: 'black' }}>{Number(currentEpoch)}</Typography>
                      </Box>
                    </SplitContent>
                    <SplitContent>
                      <Box>
                        <Typography style={{ textTransform: 'none' }} variant="h6">
                          Time until next epoch:
                        </Typography>
                        <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                      </Box>
                      <Box>
                        <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                          <ProgressCountdown
                            style={{ fontWeight: 'bold', color: 'black' }}
                            base={moment().toDate()}
                            hideBar={true}
                            deadline={to}
                            description="Ends in"
                          />
                        </Typography>
                      </Box>
                    </SplitContent>
                    <SplitContent>
                      <Box>
                        <Typography style={{ textTransform: 'none' }} variant="h6">
                          Last Hour Price (TWAP):
                        </Typography>
                        <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                      </Box>
                      <Box>
                        <Typography style={{ fontWeight: 'bold', color: 'black' }}>${scalingFactor} UST</Typography>
                      </Box>
                    </SplitContent>
                    <SplitContent>
                      <Box>
                        <Typography style={{ textTransform: 'none' }} variant="h6">
                          APR:
                        </Typography>
                        <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                      </Box>
                      <Box>
                        <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                          {boardroomAPR.toFixed(2)}%
                        </Typography>
                      </Box>
                    </SplitContent>
                    <SplitContent>
                      <Box>
                        <Typography style={{ textTransform: 'none' }} variant="h6">
                          ASHARES staked:
                        </Typography>
                        <Typography style={{ fontSize: '10px', textAlign: 'center' }}></Typography>
                      </Box>
                      <Box>
                        <Typography style={{ fontWeight: 'bold', color: 'black' }}>
                          {getDisplayBalance(totalStaked)}
                        </Typography>
                      </Box>
                    </SplitContent>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Box mt={4}>
              <StyledBoardroom>
                <StyledCardsWrapper>
                  <StyledCardWrapper>
                    <Harvest />
                  </StyledCardWrapper>
                  <Spacer />
                  <StyledCardWrapper>
                    <Stake />
                  </StyledCardWrapper>
                </StyledCardsWrapper>
              </StyledBoardroom>
            </Box>
          </Box>

          <Box mt={5}>
            <Grid container justify="center" spacing={3} mt={10}>
              <Button
                disabled={stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)}
                onClick={onRedeem}
                className={
                  stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)
                    ? 'shinyButtonDisabledSecondary'
                    : 'shinyButtonSecondary'
                }
              >
                Claim &amp; Withdraw
              </Button>
            </Grid>
          </Box>
        </>
      ) : (
        <UnlockWallet />
      )}
    </Page>
  );
};

const StyledBoardroom = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default Boardroom;
