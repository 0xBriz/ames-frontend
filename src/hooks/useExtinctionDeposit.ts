import { useCallback } from 'react';
import useBombFinance from './useBombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { ExtinctionPoolInfo } from '../bomb-finance/types';
import { parseUnits } from 'ethers/lib/utils';
import useExtinctionPools from './useExtinctionPools';

const useExtinctionDeposit = (pool: ExtinctionPoolInfo) => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const { resfreshPools } = useExtinctionPools();

  const handleDeposit = useCallback(
    (amount: string) => {
      const amountBn = parseUnits(amount);
      handleTransactionReceipt(
        bombFinance.depositExtinctionPool(pool.contract, amountBn).then((tx) => {
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

export default useExtinctionDeposit;
