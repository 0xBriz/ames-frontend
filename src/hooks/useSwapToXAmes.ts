import { useCallback } from 'react';
import useBombFinance from './useBombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useSwapToXAmes = () => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      handleTransactionReceipt(bombFinance.swapToXAmes(amount), `Stake ${amount} Ames for xAmes`);
    },
    [bombFinance, handleTransactionReceipt],
  );
  return { onStake: handleStake };
};

export default useSwapToXAmes;
