import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledScoreContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 0.5rem;
`

const StyledScore = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 15rem;
font-family: PSVBoldItalic;
border-bottom: 2px solid ${COLORS.MAIN};
height: 220px;
`

const StyledTimeText = styled.p`
text-align: center;
font-family: PSVBold;
font-size: 2rem;
margin: 0;
`
const TimerContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

  position: relative;
  background-image: url('/imgs/timer-bg.png');
  background-size: cover;


  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/imgs/timer-pattern.png');
    background-size: cover;
    content: '';
    mix-blend-mode: multiply;
    opacity: 0.2;
  }
  &::before{
    content: '+5';
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    position: absolute;
    top: 4px;
    right: -43px;
    width: 75px;
    height: 30px;
    background-image: url('/imgs/added-time.png');
    
    
  }
`;
const TimerText = styled.p`
color: #FFF;
font-size: 3rem;
margin: 0;
font-family: PSVBold;
`


export{StyledScore,StyledScoreContainer,StyledTimeText,TimerContainer,TimerText}