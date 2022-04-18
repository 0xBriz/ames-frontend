import { useCallback } from 'react';
import useGrapeFinance from './useBombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { Bank } from '../bomb-finance';

const useCompound = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      grapeFinance.compound(bank.contract, bank.poolId, bank.sectionInUI),
      `Compound Node rewards`,
    );
  }, [bank, grapeFinance, handleTransactionReceipt]);

  return { onCompound: handleReward };
};

export default useCompound;
