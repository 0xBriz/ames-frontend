import { useCallback } from 'react';
import useBombFinance from './useBombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { BigNumber } from 'ethers';
import { ExtinctionPoolInfo } from '../bomb-finance/types';

const useExtinctionDeposit = (pool: ExtinctionPoolInfo) => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleDeposit = useCallback(
    (amount: string) => {
      const amountBn = BigNumber.from(amount);
      //   handleTransactionReceipt(
      //     bombFinance.stake(pool.contract, pool.poolId, amountBn),
      //     `Stake ${amount} ${pool.depositTokenName} to ${pool.contract}`,
      //   );
      handleTransactionReceipt(
        bombFinance.depositExtinctionPool(pool.contract, amountBn),
        `Deposit ${amount} ${pool.depositTokenName} to pool`,
      );
    },
    [pool, bombFinance, handleTransactionReceipt],
  );
  return { onDeposit: handleDeposit };
};

export default useExtinctionDeposit;
