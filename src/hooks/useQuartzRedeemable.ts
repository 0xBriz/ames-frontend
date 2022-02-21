import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
//import ERC20 from '../bomb-finance/ERC20';
import useBombFinance from './useBombFinance';
//import config from '../config';

const useQuartzRedeemable = () => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bombFinance = useBombFinance();

  useEffect(() => {
    async function fetchQuartzRedeemable() {
      try {
        setBalance(await bombFinance.getBurnableQuartzLeft());
      } catch (err) {
        console.error(err);
      }
    }
    fetchQuartzRedeemable();
  }, [setBalance, bombFinance]);

  return balance;
};

export default useQuartzRedeemable;
