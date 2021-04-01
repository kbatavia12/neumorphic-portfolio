import React from 'react'
import SideBar from '../components/SideBar';
import ViewScreen from '../components/ViewScreen';
import styles from './css/MainScreen.module.css';


const MainScreen = () => {
    return (
        <div className={styles.mainContainer} >
            <div className = {styles.sidebarContainer} >
                <SideBar />
            </div>
            <div className = {styles.viewscreenContainer}>
                <ViewScreen />
            </div>
        </div>
    )
}

export default MainScreen;
