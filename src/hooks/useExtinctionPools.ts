import { useCallback, useEffect, useState } from 'react';
import { ExtinctionPoolInfo } from '../bomb-finance/types';
import useBombFinance from './useBombFinance';

const useExtinctionPools = (account: string) => {
  const bombFinance = useBombFinance();
  const [extinctionPool, setExtinctionPool] = useState<ExtinctionPoolInfo[]>(null);

  const fetchPools = useCallback(async () => {
    setExtinctionPool(await bombFinance.loadExtinctionPools());
  }, [bombFinance]);

  useEffect(() => {
    if (bombFinance && account) {
      fetchPools().catch((err) => console.error(`Failed to fetch extinction pools: ${err.stack}`));
    }
  }, [bombFinance, fetchPools, account]);

  return extinctionPool;
};

export default useExtinctionPools;
