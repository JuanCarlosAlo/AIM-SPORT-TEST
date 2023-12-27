import { TEAMS } from '../../constants/teams';
import Content from '../content/Content';
import Score from '../score/Score';
import TeamIcon from '../team-icon/TeamIcon';
import ToggleButton from '../toggle-button/ToggleButton';
import { StyledScore } from './styles';
import { useFetch } from '../../hook/useFetch';

const ScreenScore = ({ setScreen, screen, visible }) => {
	const { data, loading } = useFetch({ url: '/data/file.json' });
	if (loading) return <h2>Loading</h2>;
	console.log(data);
	return (
		<StyledScore visible={visible}>
			<ToggleButton setValue={setScreen} value={'vs'} text={'VS'} />
			<Content>
				<TeamIcon team={TEAMS.team1} screen={screen} visible={visible}/>
				<Score visible={visible}/>
				<TeamIcon team={TEAMS.team2} screen={screen} visible={visible}/>
			</Content>
		</StyledScore>
	);
};

export default ScreenScore;
