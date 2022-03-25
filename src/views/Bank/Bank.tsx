import React, { useEffect } from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import styled from 'styled-components';
import { useWallet } from 'use-wallet';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardContent, Typography, Grid } from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import UnlockWallet from '../../components/UnlockWallet';
import Harvest from './components/Harvest';
import Stake from './components/Stake';
import useBank from '../../hooks/useBank';
import useStatsForPool from '../../hooks/useStatsForPool';
import usePoolTimes from '../../hooks/usePoolTimes';
import useRedeem from '../../hooks/useRedeem';
import { Bank as BankEntity, ContractName } from '../../bomb-finance';
import useBombFinance from '../../hooks/useBombFinance';
import TokenSymbol from '../../components/TokenSymbol';
import CardIcon from '../../components/CardIcon';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

interface BankProps {
  bankId: ContractName;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 16px;
  background-color: #feffeb;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const CardSectionSplit = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StyledTypography = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

const StyledTokenSymbol = styled(TokenSymbol)`
  height: 32px;
`;

const VaultLink = styled.a`
  text-decoration: underline;
  color: inherit;
`;

const Bank: React.FC<BankProps> = ({ bankId }) => {
  useEffect(() => window.scrollTo(0, 0));
  const classes = useStyles();
  const bank = useBank(bankId);

  const { account } = useWallet();
  const { onRedeem } = useRedeem(bank);
  const statsOnPool = useStatsForPool(bank);

  const poolTimes = usePoolTimes(bank.contract);

  const renderPoolKind = () => {
    if (bank.earnTokenName === 'QUARTZ') {
      if (bank.contract.includes('Genesis')) {
        return (
          <StyledTypography>
            <StyledTokenSymbol size={32} symbol="QUARTZ" />
            <Typography color="textPrimary" style={{ marginLeft: '8px' }}>
              Genesis Pool
            </Typography>
          </StyledTypography>
        );
      }

      return (
        <StyledTypography>
          <StyledTokenSymbol size={32} symbol="QUARTZ" />
          <Typography color="textPrimary" style={{ marginLeft: '8px' }}>
            Reward Pool
          </Typography>
        </StyledTypography>
      );
    }

    return (
      <StyledTypography>
        <StyledTokenSymbol size={32} symbol="ASHARE" />
        <Typography color="textPrimary" style={{ marginLeft: '8px' }}>
          Reward Pool
        </Typography>
      </StyledTypography>
    );
  };

  const getRunningStatus = () => {
    const currentTimeStamp = new Date().getTime();

    if (['1QSHARE-UST-LP', '1QSHARE', 'AMES-ASHARE'].includes(bank.depositTokenName)) {
      return 'Not running';
    }

    if (poolTimes[1] * 1000 < currentTimeStamp) {
      return 'Finished';
    }

    if (poolTimes[0] * 1000 < currentTimeStamp) {
      return 'Running';
    }

    return 'Not open yet';
  };

  return account && bank && poolTimes ? (
    <Wrapper>
      <Header>
        <TokenSymbol symbol={bank.depositToken.symbol} size={120} />
        <Typography style={{ fontWeight: 'bold', marginBottom: '16px' }} variant="h4">
          {bank?.depositTokenName}
        </Typography>
        {renderPoolKind()}
        {bank.onlyVault ? (
          <Alert
            style={{ backgroundColor: 'rgb(255,148,148,.3)', textAlign: 'left', marginBottom: '16px', color: 'black' }}
            variant="filled"
            severity="info"
          >
            <VaultLink href="https://www.ames-defi.tools/vaults">
              Vault only
              <OpenInNewIcon
                style={{ fontSize: '12px', display: 'inline-block', position: 'relative', top: '-7px' }}
                color="inherit"
              />
            </VaultLink>
          </Alert>
        ) : null}
      </Header>
      <CardSection>
        <CardSectionSplit>
          <Typography style={{ color: '#828282' }}>Status</Typography>
          <Typography color="textPrimary" style={{ fontWeight: 'bold' }}>
            {getRunningStatus()}
          </Typography>
        </CardSectionSplit>
        <CardSectionSplit>
          <Typography style={{ color: '#828282' }}>Total Value Locked</Typography>
          <Typography color="textPrimary" style={{ fontWeight: 'bold' }}>
            ${statsOnPool?.TVL || '0.0'}
          </Typography>
        </CardSectionSplit>
        <CardSectionSplit>
          <Typography style={{ color: '#828282' }}>APR</Typography>
          <Typography color="textPrimary" style={{ fontWeight: 'bold' }}>
            {bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%
          </Typography>
        </CardSectionSplit>
        <CardSectionSplit>
          <Typography style={{ color: '#828282' }}>Daily APR</Typography>
          <Typography color="textPrimary" style={{ fontWeight: 'bold' }}>
            {bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%
          </Typography>
        </CardSectionSplit>
      </CardSection>
      <CardSection>
        <Stake bank={bank} />
        <Spacer size="md" />
        <Harvest bank={bank} />
      </CardSection>
    </Wrapper>
  ) : !bank ? (
    <BankNotFound />
  ) : (
    <UnlockWallet />
  );
};

const LPTokenHelpText: React.FC<{ bank: BankEntity }> = ({ bank }) => {
  const bombFinance = useBombFinance();
  const bombAddr = bombFinance.BOMB.address;
  const bshareAddr = bombFinance.BSHARE.address;

  let pairName: string;
  let uniswapUrl: string;

  if (bank.depositTokenName.includes('QUARTZ')) {
    pairName = 'QUARTZ-UST pair';
    uniswapUrl = 'https://pancakeswap.finance/add/0x224e64ec1BDce3870a6a6c777eDd450454068FEC/' + bombAddr;
  } else {
    pairName = 'BSHARE-BNB pair';
    uniswapUrl = 'https://pancakeswap.finance/add/BNB/' + bshareAddr;
  }

  return (
    <Card>
      <CardContent>
        <StyledLink href={uniswapUrl} target="_blank">
          {`Provide liquidity for ${pairName} now on DefiKingdoms`}
        </StyledLink>
      </CardContent>
    </Card>
  );
};

const BankNotFound = () => {
  return (
    <Center>
      <PageHeader icon="🏚" title="Not Found" subtitle="You've hit a bank just robbed by unicorns." />
    </Center>
  );
};

const StyledBank = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  text-decoration: underline;
  color: inherit;
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

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Bank;
