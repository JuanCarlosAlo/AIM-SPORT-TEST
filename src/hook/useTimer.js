import { useEffect, useContext, useState } from 'react';
import { TimerContext } from '../context/Timer.context';
import { formatTime } from '../utils/formatTime';
import { calculateRemainingTime } from '../utils/calculateRemainingTime';

export const useTimer = () => {
  const { startDate, setStartDate, initialTime } = useContext(TimerContext);
  const initialTimeInSeconds = 45 * 60;
  const [remainingTime, setRemainingTime] = useState(initialTime ? calculateRemainingTime(initialTime) : initialTimeInSeconds);

  const updateRemainingTime = () => {
    setRemainingTime(calculateRemainingTime(initialTime || startDate));
  };

  useEffect(() => {
    updateRemainingTime();

    let interval;

    if (startDate) {
      interval = setInterval(updateRemainingTime, 1000);

      if (calculateRemainingTime(initialTime || startDate) <= 0) {
        clearInterval(interval);
      }
    }

    return () => clearInterval(interval);
  }, [startDate, initialTime]);

  const startTimer = () => {
    const newStartDate = new Date();
    newStartDate.setMinutes(newStartDate.getMinutes() + 45);
    setStartDate(newStartDate);
  };

  const formattedTime = formatTime(remainingTime);

  return {
    remainingTime: formattedTime,
    startTimer,
  };
};
