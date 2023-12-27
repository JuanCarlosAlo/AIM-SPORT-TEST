import { StyledButton } from './styles';

const ToggleButton = ({ text, setValue, value }) => {
	const handleClick = () => {
		setValue(value);
	};

	if (value) {
		return <StyledButton onClick={handleClick}>{text}</StyledButton>;
	} else {
		return <StyledButton onClick={() => setValue()}>{text}</StyledButton>;
	}
};

export default ToggleButton;
