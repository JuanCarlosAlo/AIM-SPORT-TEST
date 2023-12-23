import { TEAMS } from "../../constants/teams"
import Content from "../content/Content"
import TeamIcon from "../team-icon/TeamIcon"
import { StyledVs, StyledVsText } from "./styles"

const ScreenVs =({setScreen,screem})=>{
    return  <StyledVs>
    <button onClick={()=> setScreen('score')}>Score</button>
    <Content>
        <TeamIcon team={TEAMS.team1} screen={screen}/>
        <StyledVsText>VS</StyledVsText>
        <TeamIcon team={TEAMS.team2} screen={screen}/>
    </Content>
</StyledVs>
}

export default ScreenVs