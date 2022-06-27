import { useEffect, useState } from 'react';
import { ExtinctionPoolInfo } from '../bomb-finance/types';
import useBombFinance from './useBombFinance';
import moment from 'moment';

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useExtinctionTime = (pool: ExtinctionPoolInfo) => {
  const bombFinance = useBombFinance();
  const isUnlocked = bombFinance?.isUnlocked;
  const [poolEndTime, setPoolEndTime] = useState<Time>(null);
  const [lockTime, setLockTime] = useState<Time>(null);
  const [endTime, setEndTime] = useState<number>(null);

  useEffect(() => {
    const setTime = () => {
      // start block timestamp + 7 days gives end time
      const startTime = moment(pool.starTimestamp * 1000);
      const endTimeMoment = startTime.add(10, 'days');
      const endTimeDiff = moment.duration(endTimeMoment.diff(Date.now()));

      if (endTimeDiff.hours() <= 0 && endTimeDiff.minutes() <= 0 && endTimeDiff.seconds() <= 5) {
        setPoolEndTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setPoolEndTime({
          days: Math.abs(endTimeDiff.days()),
          hours: Math.abs(endTimeDiff.hours()),
          minutes: Math.abs(endTimeDiff.minutes()),
          seconds: Math.abs(endTimeDiff.seconds()),
        });
      }

      const lockTimeMoment = moment(pool.starTimestamp * 1000).add(3, 'days');
      const lockTimeDiff = moment.duration(lockTimeMoment.diff(Date.now()));

      if (lockTimeDiff.hours() <= 0 && lockTimeDiff.minutes() <= 0 && lockTimeDiff.seconds() <= 5) {
        setLockTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setLockTime({
          days: Math.abs(lockTimeDiff.days()),
          hours: Math.abs(lockTimeDiff.hours()),
          minutes: Math.abs(lockTimeDiff.minutes()),
          seconds: Math.abs(lockTimeDiff.seconds()),
        });
      }
    };

    if (pool && isUnlocked) {
      const timer = setInterval(() => {
        setTime();
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [pool, isUnlocked]);

  return { poolEndTime, lockTime };
};

export default useExtinctionTime;
