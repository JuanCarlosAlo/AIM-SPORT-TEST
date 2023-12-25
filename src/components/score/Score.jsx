
import { StyledScore, StyledScoreContainer, StyledTimeText, TimerContainer, TimerText } from './styles';
import { useTimer } from '../../hook/useTimer';

const Score = () => {
  const { remainingTime, startTimer } = useTimer();

  return (
    <StyledScoreContainer>
      <StyledScore>
        <span>0</span>
        <span>-</span>
        <span>0</span>
      </StyledScore>
      <StyledTimeText>TIME</StyledTimeText>

      <TimerContainer>
        <TimerText>{remainingTime}</TimerText>
      </TimerContainer>

      <button onClick={() => startTimer()}>Start</button>
    </StyledScoreContainer>
  );
};

export default Score;