import { useState } from "react";
import ScreenScore from "../../components/screen-score/ScreenScore";
import ScreenVs from "../../components/screen-vs/ScreenVs";
import { StyledHome } from "./styles";

const Home = () => {
    const [screen, setScreen] = useState('vs');
    const [visible, setVisible] = useState(1); 
   
  const handleScreenChange = (newScreen) => {
    setVisible(0); 
    setTimeout(() => {
      setScreen(newScreen);
      setVisible(1); 
    }, 800);
  };
    return (
        <StyledHome>
        {screen === 'vs' && (
          <ScreenVs
            setScreen={handleScreenChange}
            screen={screen}
            visible={visible}
          />
        )}
        { screen !== 'vs' && (
          <ScreenScore
            setScreen={handleScreenChange}
            screen={screen}
            visible={visible}
          />
        )}
      </StyledHome>
    );
  };
  
  export default Home