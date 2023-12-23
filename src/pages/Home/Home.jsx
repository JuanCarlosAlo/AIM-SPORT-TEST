import { useState } from "react"
import { StyledHome } from "./styles"

import ScreenVs from "../../components/screen-vs/ScreenVs"
import ScreenScore from "../../components/screen-score/ScreenScore"

const Home = ()=> {
    const[screen,setScreen] = useState('vs')
    return <StyledHome>
        {screen === 'vs' ? (
           <ScreenVs setScreen={setScreen} screen={screen}/>
        ): (
            <ScreenScore setScreen={setScreen} screen={screen}/>
        )}
    
    </StyledHome>
}

export default Home