import React, { useMemo } from 'react';
import styled from 'styled-components';
import useTokenBalance from '../../hooks/useTokenBalance';
import { getDisplayBalance } from '../../utils/formatBalance';

import Label from '../Label';
import Modal, { ModalProps } from '../Modal';
import ModalTitle from '../ModalTitle';
import useBombFinance from '../../hooks/useBombFinance';
import TokenSymbol from '../TokenSymbol';
import { useMediaQuery } from '@material-ui/core';

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const bombFinance = useBombFinance();

  const bombBalance = useTokenBalance(bombFinance.BOMB);
  const displayBombBalance = useMemo(() => getDisplayBalance(bombBalance), [bombBalance]);

  const bshareBalance = useTokenBalance(bombFinance.BSHARE);
  const displayBshareBalance = useMemo(() => getDisplayBalance(bshareBalance), [bshareBalance]);

  const bbondBalance = useTokenBalance(bombFinance.BBOND);
  const displayBbondBalance = useMemo(() => getDisplayBalance(bbondBalance), [bbondBalance]);

  const matches = useMediaQuery('(min-width:900px)');

  return (
    <Modal>
      <ModalTitle text="My Wallet" />

      <Balances style={{ display: 'flex', flexDirection: matches ? 'row' : 'column' }}>
        <StyledBalanceWrapper style={{ paddingBottom: '15px' }}>
          <TokenSymbol symbol="QUARTZ" />
          <StyledBalance>
            <StyledValue>{displayBombBalance}</StyledValue>
            <Label color="black" text="QUARTZ Available" />
          </StyledBalance>
        </StyledBalanceWrapper>

        <StyledBalanceWrapper style={{ paddingBottom: '15px' }}>
          <TokenSymbol symbol="BSHARE" />
          <StyledBalance>
            <StyledValue>{displayBshareBalance}</StyledValue>
            <Label color="black" text="QSHARE Available" />
          </StyledBalance>
        </StyledBalanceWrapper>

        <StyledBalanceWrapper style={{ paddingBottom: '15px' }}>
          <TokenSymbol symbol="QBOND" />
          <StyledBalance>
            <StyledValue>{displayBbondBalance}</StyledValue>
            <Label color="black" text="QBOND Available" />
          </StyledBalance>
        </StyledBalanceWrapper>
      </Balances>
    </Modal>
  );
};

const StyledValue = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 16px;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`;

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 ${(props) => props.theme.spacing[3]}px;
`;

export default AccountModal;
