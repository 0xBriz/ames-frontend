import { useCallback, useEffect, useState } from 'react';
import { PegPool } from '../bomb-finance/types';
import useBombFinance from './useBombFinance';
import useRefresh from './useRefresh';

const usePegPool = () => {
  const bombFinance = useBombFinance();
  const isUnlocked = bombFinance?.isUnlocked;
  const [pegPool, setPegPool] = useState<PegPool>(null);
  const { fastRefresh } = useRefresh();

  const fetchPool = useCallback(async () => {
    setPegPool(await bombFinance.getPegPool());
  }, [bombFinance]);

  const refreshPool = async () => {
    setPegPool(await bombFinance.getPegPool());
  };

  useEffect(() => {
    if (isUnlocked) {
      refreshPool().catch((err) => console.error(`Failed to fetch peg pool: ${err.stack}`));
    }
  }, [bombFinance, fetchPool, isUnlocked, fastRefresh]);

  return { pegPool, refreshPool };
};

export default usePegPool;
