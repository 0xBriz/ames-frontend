import { useCallback } from 'react';
import useBombFinance from './useBombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { ContractName } from '../bomb-finance';

const useExtinctionClaimRewards = (poolName: ContractName) => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(bombFinance.claimExtinctionPool(poolName), ` Claim rewards from AMES pool `);
  }, [poolName, bombFinance, handleTransactionReceipt]);

  return { doClaim: handleReward };
};

export default useExtinctionClaimRewards;
