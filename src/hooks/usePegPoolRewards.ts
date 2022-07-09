import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { PegPool, PegPoolToken } from '../bomb-finance/types';
import { getDexPriceFromPair } from '../utils/dexscreener';
import useBombFinance from './useBombFinance';

const usePegPoolRewards = (pegPool: PegPool) => {
  const bombFinance = useBombFinance();
  const isUnlocked = bombFinance?.isUnlocked;
  const [rewardTokens, setRewardTokens] = useState<PegPoolToken[]>([]);
  const [totalRewardValue, setTotalRewardValue] = useState<string>(null);
  const [apr, setApr] = useState<{
    daily: string;
    yearly: string;
  }>({
    daily: '0',
    yearly: '0',
  });

  const BSC_BLOCK_A_DAY = 28800;

  useEffect(() => {
    const getAPR = (tokens: PegPoolToken[]) => {
      let totalDollarValuePerDay = 0;
      let totalDollarValuePerYear = 0;

      tokens.forEach((tk) => {
        const rpb = tk.rewardPerBlock;
        const dollarValuePerBlock = rpb * tk.currentPriceNum;
        const amountPerDay = dollarValuePerBlock * BSC_BLOCK_A_DAY;
        totalDollarValuePerDay += amountPerDay;
        const amountPerYear = amountPerDay * 365;
        totalDollarValuePerYear += amountPerYear;
      });

      // console.log('totalDollarValuePerDay: ' + totalDollarValuePerDay);
      // console.log('totalDollarValuePerYear: ' + totalDollarValuePerYear);
      // console.log(totalDollarValuePerDay / Number(pegPool.totalDesposits));
      // console.log(totalDollarValuePerYear / Number(pegPool.totalDesposits));
      setApr({
        daily: ethers.utils.commify(((totalDollarValuePerDay / Number(pegPool.totalDesposits)) * 100).toFixed(2)),
        yearly: ethers.utils.commify(((totalDollarValuePerYear / Number(pegPool.totalDesposits)) * 100).toFixed(2)),
      });
    };

    const getTokens = async () => {
      const tokens = await bombFinance.getPegPoolPendingRewards();
      let totalValue = 0;
      for (const token of tokens) {
        const priceInfo = await getDexPriceFromPair('bsc', token.pairAddress);
        token.currentPrice = priceInfo.priceUI;
        token.currentPriceNum = priceInfo.priceNum;
        const pendingValue = priceInfo.priceNum * Number(token.amount);
        token.pendingValue = pendingValue.toFixed(2);
        totalValue += pendingValue;
      }

      getAPR(tokens);

      setTotalRewardValue(totalValue.toFixed(2));
      setRewardTokens(tokens);
    };

    if (isUnlocked && pegPool) {
      getTokens();
      const timer = setInterval(() => {
        getTokens();
      }, 1000 * 60);

      return () => clearInterval(timer);
    }
  }, [isUnlocked, pegPool]);

  return { rewardTokens, totalRewardValue, apr };
};

export default usePegPoolRewards;
