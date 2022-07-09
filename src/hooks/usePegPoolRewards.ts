import { useEffect, useState } from 'react';
import { PegPoolToken } from '../bomb-finance/types';
import { getDexPriceFromPair } from '../utils/dexscreener';
import useBombFinance from './useBombFinance';

const usePegPoolRewards = () => {
  const bombFinance = useBombFinance();
  const isUnlocked = bombFinance?.isUnlocked;
  const [rewardTokens, setRewardTokens] = useState<PegPoolToken[]>([]);
  const [totalRewardValue, setTotalRewardValue] = useState<string>(null);

  useEffect(() => {
    const getTokens = async () => {
      const tokens = await bombFinance.getPegPoolPendingRewards();
      let totalValue = 0;
      for (const token of tokens) {
        const priceInfo = await getDexPriceFromPair('bsc', token.pairAddress);
        token.currentPrice = priceInfo.priceUI;
        const pendingValue = priceInfo.priceNum * Number(token.amount);
        token.pendingValue = pendingValue.toFixed(2);
        totalValue += pendingValue;
      }
      setTotalRewardValue(totalValue.toFixed(2));
      setRewardTokens(tokens);
    };

    if (isUnlocked) {
      getTokens();
      const timer = setInterval(() => {
        getTokens();
      }, 1000 * 10);

      return () => clearInterval(timer);
    }
  }, [isUnlocked]);

  return { rewardTokens, totalRewardValue };
};

export default usePegPoolRewards;
