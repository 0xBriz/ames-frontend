import { useCallback } from 'react';
import useBombFinance from './useBombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { ContractName } from '../bomb-finance';
import useExtinctionPools from './useExtinctionPools';

const useExtinctionClaimRewards = (poolName: ContractName) => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const { resfreshPools } = useExtinctionPools();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      bombFinance.claimExtinctionPool(poolName).then((tx) => {
        resfreshPools();
        return tx;
      }),
      ` Claim rewards from AMES pool `,
    );
  }, [poolName, bombFinance, handleTransactionReceipt]);

  return { doClaim: handleReward };
};

export default useExtinctionClaimRewards;
