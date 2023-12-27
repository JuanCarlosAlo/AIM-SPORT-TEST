import { TEAMS } from '../../constants/teams';
import Content from '../content/Content';
import TeamIcon from '../team-icon/TeamIcon';
import ToggleButton from '../toggle-button/ToggleButton';
import { StyledVs, StyledVsText } from './styles';

import { useFetch } from '../../hook/useFetch';

const ScreenVs = ({ setScreen, screen, visible }) => {
	const { data, loading } = useFetch({ url: '/data/file.json' });
	if (loading) return <h2>Loading</h2>;
  console.log(data,visible)
	return (
		<StyledVs visible={visible}>
			<ToggleButton
				setValue={setScreen}
				value={'score'}
				text={'Score'}
			
			/>
			<Content>
				<TeamIcon team={TEAMS.team1} screen={screen} visible={visible}/>
				<StyledVsText visible={visible}>Vs</StyledVsText>
				<TeamIcon team={TEAMS.team2} screen={screen} visible={visible}/>
			</Content>
		</StyledVs>
	);
};

export default ScreenVs;
