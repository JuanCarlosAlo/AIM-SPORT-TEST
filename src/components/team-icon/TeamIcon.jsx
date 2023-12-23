import { StyledTeam, StyledTeamIcon, StyledTeamText } from "./styles"

const TeamIcon=({team,screen})=>{
    console.log(screen)
    return <StyledTeamIcon>
        {screen === 'score' && (
            <StyledTeamText>{team.name}</StyledTeamText>
        )}
        <StyledTeam src={team.img} alt="" />
        </StyledTeamIcon>
    
}

export default TeamIcon