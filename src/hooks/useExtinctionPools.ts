import { useCallback, useEffect, useState } from 'react';
import { ExtinctionPoolInfo } from '../bomb-finance/types';
import useBombFinance from './useBombFinance';
import useRefresh from './useRefresh';

const useExtinctionPools = () => {
  const bombFinance = useBombFinance();
  const isUnlocked = bombFinance?.isUnlocked;
  const [extinctionPool, setExtinctionPool] = useState<ExtinctionPoolInfo[]>(null);
  const { fastRefresh } = useRefresh();

  const fetchPools = useCallback(async () => {
    setExtinctionPool(await bombFinance.loadExtinctionPools());
  }, [bombFinance]);

  useEffect(() => {
    if (isUnlocked) {
      fetchPools().catch((err) => console.error(`Failed to fetch extinction pools: ${err.stack}`));
    }
  }, [bombFinance, fetchPools, isUnlocked, fastRefresh]);

  return extinctionPool;
};

export default useExtinctionPools;
