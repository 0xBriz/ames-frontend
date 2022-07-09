import { useCallback } from 'react';
import useBombFinance from './useBombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';
import { PegPool } from '../bomb-finance/types';
import usePegPool from './usePegPool';

const usePegPoolDeposit = (pool: PegPool) => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const { refreshPool } = usePegPool();

  const handleDeposit = useCallback(
    async (amount: string) => {
      const amountBn = parseUnits(amount);
      handleTransactionReceipt(
        bombFinance.depositPegPool(amountBn).then((tx) => {
          refreshPool();
          return tx;
        }),
        `Deposit ${amount} ${pool.depositTokenName} to pool`,
      );
    },
    [pool, bombFinance, handleTransactionReceipt],
  );

  return { onDeposit: handleDeposit };
};

export default usePegPoolDeposit;
