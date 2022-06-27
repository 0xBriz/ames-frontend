import { useCallback, useEffect, useState } from 'react';
import { ExtinctionPoolInfo } from '../bomb-finance/types';
import useBombFinance from './useBombFinance';
import useRefresh from './useRefresh';

const useExtinctionPools = () => {
  const bombFinance = useBombFinance();
  const isUnlocked = bombFinance?.isUnlocked;
  const [extinctionPools, setExtinctionPools] = useState<ExtinctionPoolInfo[]>(null);
  const { fastRefresh } = useRefresh();

  const fetchPools = useCallback(async () => {
    setExtinctionPools(await bombFinance.loadExtinctionPools());
  }, [bombFinance]);

  const resfreshPools = async () => {
    setExtinctionPools(await bombFinance.loadExtinctionPools());
  };

  useEffect(() => {
    if (isUnlocked) {
      resfreshPools().catch((err) => console.error(`Failed to fetch extinction pools: ${err.stack}`));
    }
  }, [bombFinance, fetchPools, isUnlocked, fastRefresh]);

  return { extinctionPools, resfreshPools };
};

export default useExtinctionPools;
