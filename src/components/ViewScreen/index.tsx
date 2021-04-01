import React from 'react'
import styles from './css/index.module.css';
import HomeScreen from './HomeScreen';

interface ScreenProps {
    screenName: String
}

const Screen = ({ screenName }: ScreenProps) => {
    switch (screenName) {
        case "home":
            return <HomeScreen/>
        default:
            return <HomeScreen/>
    }
}

const ViewScreen = () => {
    return (
        <div className={styles.mainViewScreen} >
            <Screen screenName = {"home"} />
        </div>
    )
}

export default ViewScreen;
