import { styled } from "styled-components";

const StyledTeamIcon = styled.div`
position: relative;
`
const StyledTeamText = styled.p`
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
font-size: 2rem;
font-family: PSVCondensed;
`

const StyledTeam = styled.img`
width: 450px;
height: 450px;
`

export{StyledTeam,StyledTeamIcon,StyledTeamText}