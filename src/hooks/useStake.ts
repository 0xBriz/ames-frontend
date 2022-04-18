import { useCallback } from 'react';
import useBombFinance from './useBombFinance';
import { Bank } from '../bomb-finance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

const useStake = (bank: Bank) => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      const amountBn = bank.sectionInUI !== 3 ? parseUnits(amount, bank.depositToken.decimal) : BigNumber.from(amount);
      if (bank.sectionInUI === 3) {
        handleTransactionReceipt(
          bombFinance.stake(bank.contract, bank.poolId, amountBn),
          `Buy ${amount} ${bank.depositTokenName} Node`,
        );
      } else {
        handleTransactionReceipt(
          bombFinance.stake(bank.contract, bank.poolId, amountBn),
          `Stake ${amount} ${bank.depositTokenName} to ${bank.contract}`,
        );
      }
    },
    [bank, bombFinance, handleTransactionReceipt],
  );
  return { onStake: handleStake };
};

export default useStake;
