import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledButton = styled.div`
padding: 0.5rem;
background-color: ${COLORS.MAIN};
color: #fff;
border: 2PX SOLID #fff;
border-radius: 1rem;
width: 250px;
text-align: center;
margin: 1rem auto;
cursor: pointer;
&:hover{
    background-color: ${COLORS.MAIN}BB; 
}
`

export{StyledButton}