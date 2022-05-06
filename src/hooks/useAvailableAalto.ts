import { useEffect, useState } from 'react';
import useBombFinance from './useBombFinance';
import useRefresh from './useRefresh';
import { getDisplayBalance } from '../utils/formatBalance';
import { BigNumber } from 'ethers';

const useAvailableAalto = () => {
  const { slowRefresh } = useRefresh();
  const [balance, setBalance] = useState(0);
  const bombFinance = useBombFinance();
  useEffect(() => {
    async function fetchBalance() {
      try {
        const balance = await bombFinance.getAvailableAalto();

        const parsedBalance = Number(getDisplayBalance(balance));

        setBalance(1000 - parsedBalance);
      } catch (e) {
        console.error(e);
      }
    }
    fetchBalance();
  }, [slowRefresh, bombFinance]);
  return balance;
};

export const useSwapEnabled = () => {
  const { slowRefresh } = useRefresh();
  const [balance, setBalance] = useState(false);
  const bombFinance = useBombFinance();
  useEffect(() => {
    async function fetchBalance() {
      try {
        const swapEnabled = await bombFinance.getSwapEnabled();

        setBalance(swapEnabled);
      } catch (e) {
        console.error(e);
      }
    }
    fetchBalance();
  }, [slowRefresh, bombFinance]);
  return balance;
};

export const useMaxAaltoPerEpoch = () => {
  const { slowRefresh } = useRefresh();
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bombFinance = useBombFinance();
  useEffect(() => {
    async function fetchBalance() {
      try {
        const aaltoPerEpoch = await bombFinance.getMaxAaltoPerEpoch();

        setBalance(aaltoPerEpoch);
      } catch (e) {
        console.error(e);
      }
    }
    fetchBalance();
  }, [slowRefresh, bombFinance]);
  return balance;
};

export const useAaltoPerShare = () => {
  const { slowRefresh } = useRefresh();
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bombFinance = useBombFinance();
  useEffect(() => {
    async function fetchBalance() {
      try {
        const aaltoPerShare = await bombFinance.getAaltoPerShare();

        setBalance(aaltoPerShare);
      } catch (e) {
        console.error(e);
      }
    }
    fetchBalance();
  }, [slowRefresh, bombFinance]);
  return balance;
};

export default useAvailableAalto;
