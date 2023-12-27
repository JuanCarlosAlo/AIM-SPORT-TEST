import { useState } from "react";
import { TimerContext } from "../context/Timer.context";

export const TimerProvider = ({ children }) => {

	const [startDate, setStartDate] = useState(null);
	
  
	const startTimer = () => {
	  const newStartDate = new Date();
	  newStartDate.setMinutes(newStartDate.getMinutes() + 45);
	  setStartDate(newStartDate);

	};
  
	return (
	  <TimerContext.Provider value={{ startDate, setStartDate, startTimer }}>
		{children}
	  </TimerContext.Provider>
	);
  };