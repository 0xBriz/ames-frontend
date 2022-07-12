import { useCallback } from 'react';
import useBombFinance from './useBombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import usePegPool from './usePegPool';

const usePegPoolCompound = () => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const { refreshPool } = usePegPool();

  const handleCompound = useCallback(
    async (token: string) => {
      handleTransactionReceipt(
        bombFinance.compoundTokenPegPool(token).then(async (tx) => {
          await refreshPool();
          return tx;
        }),
        `Rewards compounded`,
      );
    },
    [bombFinance, handleTransactionReceipt, refreshPool],
  );

  return { onCompound: (token: string) => handleCompound(token) };
};

export default usePegPoolCompound;
