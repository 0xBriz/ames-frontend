import { useEffect, useState } from 'react';
import { ExtinctionRewardToken } from '../bomb-finance/types';
import { getDexPriceFromPair } from '../utils/dexscreener';
import useBombFinance from './useBombFinance';

const useExtinctionRewardValues = (tokens: ExtinctionRewardToken[]) => {
  const bombFinance = useBombFinance();
  const isUnlocked = bombFinance?.isUnlocked;
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    const getValues = async () => {
      const totalValues: string[] = [];
      for (const token of tokens) {
        const priceInfo = await getDexPriceFromPair('bsc', token.pairAddress);
        totalValues.push((priceInfo.priceNum * token.injectedAmount).toFixed(2));
      }

      setValues(totalValues);
    };

    if (tokens && isUnlocked) {
      getValues();
      const timer = setInterval(() => {
        getValues();
      }, 1000 * 10);

      return () => clearInterval(timer);
    }
  }, [tokens, isUnlocked]);

  return values;
};

export default useExtinctionRewardValues;
