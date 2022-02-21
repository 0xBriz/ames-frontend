import React, { useMemo } from 'react';
import useTreasuryBalance from '../../hooks/useTreasuryBalance';
import useBombFinance from '../../hooks/useBombFinance';
import { getDisplayBalance } from '../../utils/formatBalance';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useBombStats from '../../hooks/useBombStats';
import useShareStats from '../../hooks/usebShareStats';
import { Box, Button, Typography, Card, CardContent } from '@material-ui/core';
import Spacer from '../Spacer';

const TreasuryBalance = () => {
  const bombFinance = useBombFinance();
  const quartzStats = useBombStats();
  const shareStats = useShareStats();
  const quartz = bombFinance.BOMB;
  const qshare = bombFinance.BSHARE;
  const quartzUst = bombFinance.externalTokens['QUARTZ-UST-LP'];
  const qshareONE = bombFinance.externalTokens['QSHARE-ONE-LP'];
  const quartzQSHARE = bombFinance.externalTokens['QUARTZ-QSHARE-LP'];
  const quartzUSTLPBalance = useTreasuryBalance(quartzUst);
  const quartzUSTLPBurnBalance = useTreasuryBalance(quartzUst, '0x7bdef7bdef7bdef7bdef7bdef7bdef7bdef6e7ad');
  const qshareBurnedBalance = useTreasuryBalance(qshare, '0x7bdef7bdef7bdef7bdef7bdef7bdef7bdef6e7ad');
  const quartzBurnedBalance = useTreasuryBalance(quartz, '0x7bdef7bdef7bdef7bdef7bdef7bdef7bdef6e7ad');
  const qshareOneLPBalance = useTreasuryBalance(qshareONE);
  const quartzQshareLPBalance = useTreasuryBalance(quartzQSHARE);

  const quartzPriceInDollars = useMemo(
    () => (quartzStats ? Number(quartzStats.priceInDollars).toFixed(2) : null),
    [quartzStats],
  );
  const sharePriceInDollars = useMemo(
    () => (shareStats ? Number(shareStats.priceInDollars).toFixed(2) : null),
    [shareStats],
  );

  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('QUARTZ-UST-LP', quartzUst);
  const earnedInDollars = (
    Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(quartzUSTLPBalance, 18))
  ).toFixed(2);

  const stakedTokenPriceInDollars2 = useStakedTokenPriceInDollars('QSHARE-ONE-LP', qshareONE);
  const earnedInDollars2 = (
    Number(stakedTokenPriceInDollars2) * Number(getDisplayBalance(qshareOneLPBalance, 18))
  ).toFixed(2);

  const stakedTokenPriceInDollars3 = useStakedTokenPriceInDollars('QUARTZ-QSHARE-LP', quartzQSHARE);
  const earnedInDollars3 = (
    Number(stakedTokenPriceInDollars3) * Number(getDisplayBalance(quartzQshareLPBalance, 18))
  ).toFixed(2);

  const burnedQuartzUST = (
    Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(quartzUSTLPBurnBalance, 18))
  ).toFixed(2);

  const burnedQSHARE = (Number(sharePriceInDollars) * Number(getDisplayBalance(qshareBurnedBalance, 18))).toFixed(2);
  const burnedQuartz = (Number(quartzPriceInDollars) * Number(getDisplayBalance(quartzBurnedBalance, 18))).toFixed(2);

  return (
    <Card style={{ padding: '16px' }}>
      <CardContent>
        <Typography style={{ fontWeight: 'bold', textTransform: 'none', margin: '0 0 16px 0' }} variant="h6">
          Treasury owned liquidity:
        </Typography>

        <p style={{ maxWidth: '400px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <span>{getDisplayBalance(quartzUSTLPBalance, 18, 2)} QUARTZ-UST </span>
          <strong style={{ marginLeft: '16px' }}>${earnedInDollars}</strong>
        </p>
        <p style={{ maxWidth: '400px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <span>{getDisplayBalance(qshareOneLPBalance, 18, 2)} QSHARE-ONE </span>
          <strong style={{ marginLeft: '16px' }}>${earnedInDollars2}</strong>
        </p>
        <p style={{ maxWidth: '400px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <span>{getDisplayBalance(quartzQshareLPBalance, 18, 2)} QUARTZ-QSHARE </span>
          <strong style={{ marginLeft: '16px' }}>${earnedInDollars3}</strong>
        </p>
        <Spacer size="md" />
        <Typography style={{ fontWeight: 'bold', textTransform: 'none', margin: '0 0 8px 0' }} variant="h6">
          Burned tokens:
        </Typography>

        <p style={{ maxWidth: '400px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <span>{getDisplayBalance(quartzUSTLPBurnBalance, 18, 2)} QUARTZ-UST </span>
          <strong style={{ marginLeft: '16px' }}>${burnedQuartzUST}</strong>
        </p>
        <p style={{ maxWidth: '400px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <span>{getDisplayBalance(quartzBurnedBalance, 18, 2)} QUARTZ </span>
          <strong style={{ marginLeft: '16px' }}>${burnedQuartz}</strong>
        </p>
        <p style={{ maxWidth: '400px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <span>{getDisplayBalance(qshareBurnedBalance, 18, 2)} QSHARE </span>
          <strong style={{ marginLeft: '16px' }}>${burnedQSHARE}</strong>
        </p>
      </CardContent>
    </Card>
  );
};

export default TreasuryBalance;
