export const calculateRemainingTime = (targetDate) => {
  const now = new Date().getTime();
  const timeDifferenceInSeconds = Math.max(Math.floor((targetDate - now) / 1000), 0);
  console.log
  if (targetDate) { return timeDifferenceInSeconds }
  else { return 2700 }
};
