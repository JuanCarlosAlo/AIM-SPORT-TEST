import { styled } from "styled-components";

const StyledVs = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
background-image: url('/imgs/vs-bg.png');
background-size: cover;
background-position: bottom;
`

const StyledVsText = styled.p`
font-family: PSVBoldItalic;
font-size: 15rem;
`

export {StyledVs,StyledVsText}