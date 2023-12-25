import { useState } from "react";
import { TimerContext } from "../context/Timer.context";

export const TimerProvider = ({ children }) => {
	const [startDate, setStartDate] = useState(null);
	const [initialTime, setInitialTime] = useState(null);
  
	const startTimer = () => {
	  const newStartDate = new Date();
	  newStartDate.setMinutes(newStartDate.getMinutes() + 45);
	  setStartDate(newStartDate);
	  setInitialTime(newStartDate);
	};
  
	return (
	  <TimerContext.Provider value={{ startDate, setStartDate, initialTime, startTimer }}>
		{children}
	  </TimerContext.Provider>
	);
  };