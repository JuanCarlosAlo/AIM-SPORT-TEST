import { StyledScore, StyledScoreContainer } from "./styles"

const Score =()=>{
    return <StyledScoreContainer>
       <StyledScore>
        <span>0</span><span>-</span><span>0</span>
       </StyledScore>
       <p>TIME</p>
       <p>45:00</p>
    </StyledScoreContainer>
}
export default Score