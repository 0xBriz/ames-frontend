import {useEffect, useState} from 'react';
import useBombFinance from './useBombFinance';
import useRefresh from './useRefresh';
import { BigNumber } from 'ethers';

const useSwapperSoldAmount = () => {
  const [nextPrice, setNextPrice] = useState(BigNumber.from(0));
  const {slowRefresh} = useRefresh();
  const bombFinance = useBombFinance();

  useEffect(() => {
    async function fetchNextPrice() {
      try {
        setNextPrice(await bombFinance.getSwapperSoldAmount());
      } catch (err) {
        console.error(err);
      }
    }
    fetchNextPrice();
  }, [setNextPrice, bombFinance, slowRefresh]);

  return nextPrice;
};

export default useSwapperSoldAmount;
