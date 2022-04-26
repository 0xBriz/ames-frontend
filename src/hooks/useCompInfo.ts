import { useCallback, useEffect, useState } from 'react';
import useBombFinance from './useBombFinance';
import config from '../config';
import { BigNumber } from 'ethers';
import useWallet from 'use-wallet';

const useCompInfo = () => {
  const [total, setTotal] = useState<BigNumber>(BigNumber.from(0));
  const [canClaim, setCanClaim] = useState<BigNumber>(BigNumber.from(0));
  const [claimed, setClaimed] = useState<BigNumber>(BigNumber.from(0));
  const { account } = useWallet();
  const bombFinance = useBombFinance();

  const fetchCompInfo = useCallback(async () => {
    setTotal(await bombFinance.getCompTotal(account));
    setCanClaim(await bombFinance.getCompClaim(account));
    setClaimed(await bombFinance.getClaimed(account));
  }, [bombFinance, account]);

  useEffect(() => {
    fetchCompInfo().catch((err) => console.error(`Failed to fetch QUARTZ price: ${err.stack}`));
    const refreshInterval = setInterval(fetchCompInfo, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setTotal, setCanClaim, bombFinance, fetchCompInfo, account]);

  return { total, canClaim, claimed };
};

export default useCompInfo;
