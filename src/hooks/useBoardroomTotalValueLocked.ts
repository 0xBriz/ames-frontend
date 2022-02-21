import { useEffect, useState } from 'react';
import useBombFinance from './useBombFinance';
import useRefresh from './useRefresh';

const useBoardroomTotalValueLocked = () => {
  const [totalValueLocked, setTotalValueLocked] = useState<Number>(0);
  const { slowRefresh } = useRefresh();
  const bombFinance = useBombFinance();

  useEffect(() => {
    async function fetchTVL() {
      try {
        setTotalValueLocked(await bombFinance.getBoardroomTotalValueLocked());
      } catch (err) {
        console.error(err);
      }
    }
    fetchTVL();
  }, [setTotalValueLocked, bombFinance, slowRefresh]);

  return totalValueLocked;
};

export default useBoardroomTotalValueLocked;
