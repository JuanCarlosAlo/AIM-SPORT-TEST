import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledScoreContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 1rem;
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

export{StyledScore,StyledScoreContainer}