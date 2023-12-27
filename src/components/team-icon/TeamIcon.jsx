import { useAnimation } from 'framer-motion';
import { StyledTeam, StyledTeamIcon, StyledTeamText } from './styles';
import { useEffect } from 'react';

const TeamIcon = ({ team, screen, visible }) => {
	const controls = useAnimation();

	useEffect(() => {
		if (visible === 1) {
			controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
		} else {
			controls.start({ y: 100, opacity: 0, transition: { duration: 1 } });
		}
	}, [visible]);

	return (
		<StyledTeamIcon
			initial={{ y: 100, opacity: 0 }}
			animate={controls}
			exit='out'
		>
			{screen === 'score' && <StyledTeamText>{team.name}</StyledTeamText>}
			<StyledTeam src={team.img} alt='' />
		</StyledTeamIcon>
	);
};

export default TeamIcon;
