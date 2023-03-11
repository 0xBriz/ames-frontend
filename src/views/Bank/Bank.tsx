import React, { useEffect } from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import styled from 'styled-components';
import { useWallet } from 'use-wallet';
import { Typography } from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import UnlockWallet from '../../components/UnlockWallet';
import Harvest from './components/Harvest';
import Stake from './components/Stake';
import useBank from '../../hooks/useBank';
import useStatsForPool from '../../hooks/useStatsForPool';
import usePoolTimes from '../../hooks/usePoolTimes';
import { ContractName } from '../../bomb-finance';
import TokenSymbol from '../../components/TokenSymbol';
import { Alert } from '@material-ui/lab';

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
  const bank = useBank(bankId);
  const { account } = useWallet();
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

    if (
      [
        'AMES-BUSD-LP',
        'ASHARE-BUSD-LP',
        '1QSHARE-UST-LP',
        '1QSHARE',
        'AMES-UST-LP',
        'ASHARE-UST-LP',
        'AMES-ASHARE-LP',
      ].includes(bank.depositTokenName)
    ) {
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
        <span style={{ height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <TokenSymbol symbol={bank.depositToken.symbol} size={120} />
        </span>

        {bank.depositTokenName === 'rASHARE' ? (
          <Typography style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '2.125rem' }}>
            {bank?.depositTokenName}
          </Typography>
        ) : (
          <Typography style={{ fontWeight: 'bold', marginBottom: '16px' }} variant="h4">
            {bank?.depositTokenName}
          </Typography>
        )}
        {renderPoolKind()}
        {bank.onlyVault ? (
          <Alert
            style={{ backgroundColor: 'rgb(255,148,148,.3)', textAlign: 'left', marginBottom: '16px', color: 'black' }}
            variant="filled"
            severity="info"
          >
            <VaultLink href="https://quartz-tools-ui.vercel.app/vaults">
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
        {bank.depositTokenName !== 'rASHARE' && (
          <CardSectionSplit>
            <Typography style={{ color: '#828282' }}>Total Value Locked</Typography>
            <Typography color="textPrimary" style={{ fontWeight: 'bold' }}>
              ${statsOnPool?.TVL || '0.0'}
            </Typography>
          </CardSectionSplit>
        )}

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

const BankNotFound = () => {
  return (
    <Center>
      <PageHeader icon="🏚" title="Not Found" subtitle="You've hit a bank just robbed by unicorns." />
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Bank;
