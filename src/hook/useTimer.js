import { useEffect, useContext, useState } from 'react';
import { TimerContext } from '../context/Timer.context';
import { formatTime } from '../utils/formatTime';
import { calculateRemainingTime } from '../utils/calculateRemainingTime';

export const useTimer = () => {
  const { startDate,  initialTime ,startTimer} = useContext(TimerContext);
 
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(initialTime));

  const updateRemainingTime = () => {
    setRemainingTime(calculateRemainingTime(startDate));
  };

  useEffect(() => {
    updateRemainingTime();

    let interval;

    if (startDate) {
      interval = setInterval(updateRemainingTime, 1000);

      if (calculateRemainingTime(startDate) <= 0) {
        clearInterval(interval);
      }
    }

    return () => clearInterval(interval);
  }, [startDate, initialTime]);
  
  const formattedTime = formatTime(remainingTime);

  return {
    remainingTime: formattedTime,
    startTimer,
  };
};
