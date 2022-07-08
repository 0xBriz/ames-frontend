import { useEffect, useState } from 'react';
import { PegPoolToken } from '../bomb-finance/types';
import { getDexPriceFromPair } from '../utils/dexscreener';
import useBombFinance from './useBombFinance';

const usePegPoolRewards = () => {
  const bombFinance = useBombFinance();
  const isUnlocked = bombFinance?.isUnlocked;
  const [rewardTokens, setRewardTokens] = useState<PegPoolToken[]>([]);

  useEffect(() => {
    const getTokens = async () => {
      const tokens = await bombFinance.getPegPoolTokens();
      //   const totalValues: string[] = [];
      //   for (const token of tokens) {
      //     const priceInfo = await getDexPriceFromPair('bsc', token.pairAddress);
      //     //totalValues.push((priceInfo.priceNum * token.injectedAmount).toFixed(2));
      //   }

      setRewardTokens(tokens);
    };

    if (isUnlocked) {
      getTokens();
      const timer = setInterval(() => {
        getTokens();
      }, 1000 * 60);

      return () => clearInterval(timer);
    }
  }, [isUnlocked]);

  return { rewardTokens };
};

export default usePegPoolRewards;
