import { TEAMS } from "../../constants/teams"
import Content from "../content/Content"
import Score from "../score/Score"
import TeamIcon from "../team-icon/TeamIcon"
import { StyledScore } from "./styles"

const ScreenScore =({setScreen,screen})=>{
    return  <StyledScore>
    <button onClick={()=> setScreen('vs')}>VS</button>
    <Content >
        <TeamIcon team={TEAMS.team1} screen={screen}/>
        <Score/>
        <TeamIcon team={TEAMS.team2} screen={screen}/>
    </Content>
</StyledScore>
}

export default ScreenScore