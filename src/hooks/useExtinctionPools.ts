import { useCallback, useEffect, useState } from 'react';
import { ExtinctionPoolInfo } from '../bomb-finance/types';
import useBombFinance from './useBombFinance';

const useExtinctionPools = () => {
  const bombFinance = useBombFinance();
  const [extinctionPool, setExtinctionPool] = useState<ExtinctionPoolInfo[]>(null);

  const fetchPools = useCallback(async () => {
    setExtinctionPool(await bombFinance.loadExtinctionPools());
  }, [bombFinance]);

  useEffect(() => {
    const loadPools = async () => {
      const pools = await bombFinance.loadExtinctionPools();
      console.log(pools);
      setExtinctionPool(pools);
    };

    if (bombFinance) {
      fetchPools().catch((err) => console.error(`Failed to fetch extinction pools: ${err.stack}`));
    }
  }, [bombFinance, fetchPools]);

  return extinctionPool;
};

export default useExtinctionPools;
