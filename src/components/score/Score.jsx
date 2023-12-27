
import { StyledScore, StyledScoreContainer, StyledTimeText, TimerContainer, TimerText } from './styles';
import { useTimer } from '../../hook/useTimer';
import ToggleButton from '../toggle-button/ToggleButton';
import {  useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Score = ({visible}) => {
  const { remainingTime, startTimer } = useTimer();
	const controls = useAnimation();

	useEffect(() => {
		if (visible === 1) {
			controls.start({  opacity: 1, transition: { duration: 1 } });
		} else {
			controls.start({  opacity: 0, transition: { duration: 1 } });
		}
	}, [visible]);
  return (
    <StyledScoreContainer
    initial={{  opacity: 0 }}
			animate={controls}
			exit='out'
		
    >
      <StyledScore>
        <span>0</span>
        <span>-</span>
        <span>0</span>
      </StyledScore>
      <StyledTimeText>TIME</StyledTimeText>

      <TimerContainer>
        <TimerText>{remainingTime}</TimerText>
      </TimerContainer>

      <ToggleButton setValue={startTimer} text={'START'}/>
    </StyledScoreContainer>
  );
};

export default Score;