import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Button, Card, CardContent, Typography } from '@material-ui/core';
import CardIcon from '../../../components/CardIcon';
import Label from '../../../components/Label';
import Value from '../../../components/Value';
import useEarnings from '../../../hooks/useEarnings';
import useHarvest from '../../../hooks/useHarvest';

import { getDisplayBalance } from '../../../utils/formatBalance';
import { Bank } from '../../../bomb-finance';
import useBombStats from '../../../hooks/useBombStats';
import useShareStats from '../../../hooks/usebShareStats';

interface HarvestProps {
  bank: Bank;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 16px;
  color: white;
`;

const Harvest: React.FC<HarvestProps> = ({ bank }) => {
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const { onReward } = useHarvest(bank);
  const bombStats = useBombStats();
  const tShareStats = useShareStats();

  const tokenName = bank.earnTokenName === 'QSHARE' ? 'QSHARE' : 'QUARTZ';
  const tokenStats = bank.earnTokenName === 'QSHARE' ? tShareStats : bombStats;
  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  return (
    <StyledCardContentInner>
      <Wrapper>
        <Value value={getDisplayBalance(earnings)} />
        <Typography style={{ textTransform: 'uppercase', color: 'black' }}>{`≈ $${earnedInDollars}`}</Typography>
        <Typography style={{ textTransform: 'uppercase', color: 'black' }}>{`${tokenName} Earned`}</Typography>
      </Wrapper>
      <StyledCardActions>
        <Button
          onClick={onReward}
          disabled={earnings.eq(0)}
          className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
        >
          Claim
        </Button>
      </StyledCardActions>
    </StyledCardContentInner>
  );
};

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
`;

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export default Harvest;
