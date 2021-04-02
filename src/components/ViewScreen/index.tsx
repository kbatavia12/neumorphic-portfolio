import React from 'react'
import { useScreen } from '../../ScreenContext';
import AboutScreen from './AboutScreen';
import styles from './css/index.module.css';
import HomeScreen from './HomeScreen';
import Portfolio from './Portfolio';


interface ScreenProps {
    screenName: String
}

const Screen = ({ screenName }: ScreenProps) => {
    switch (screenName) {
        case "home":
            return <HomeScreen/>
        case "about":
            return <AboutScreen/>
        case "portfolio":
            return <Portfolio/>
        default:
            return <HomeScreen/>
    }
}

const ViewScreen = () => {
    
    const {screen, setScreen} = useScreen();
    
    return (
        <div className={styles.mainViewScreen} >
            <Screen screenName = {screen} />
        </div>
    )
}

export default ViewScreen;
