import { useCallback } from 'react';
import useBombFinance from './useBombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';
import useExtinctionPools from './useExtinctionPools';
import { PegPool } from '../bomb-finance/types';

const usePegPoolDeposit = (pool: PegPool) => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const { resfreshPools } = useExtinctionPools();

  const handleDeposit = useCallback(
    (amount: string) => {
      const amountBn = parseUnits(amount);
      handleTransactionReceipt(
        bombFinance.depositPegPool(amountBn).then((tx) => {
          resfreshPools();
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
