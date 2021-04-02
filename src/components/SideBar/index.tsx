import React from 'react'
import { ScreenType, useScreen } from '../../ScreenContext';
import styles from './css/index.module.css';
import SidebarButton from './SidebarButton';
// import ProfilePhoto from '../../assets/ProfilePhoto.jpg'

const SideBar = () => {
    
    const {screen, setScreen} = useScreen();
    
    return (
        <div className = {styles.mainSidebar} >
            <div className={styles.imageContainer}>
                <img className = {styles.profilePhoto} src= {"https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"} alt="" />
            </div>
            <div className={styles.nameContainer}>
                <h1>Karan <mark>Batavia</mark></h1>
                <h4>Full Stack Development Student</h4>
            </div>
            <div className={styles.sectionContainer}>
                <SidebarButton onClick = {() => setScreen(ScreenType.home)} name = "Home" />
                <SidebarButton onClick = {() => setScreen(ScreenType.about)} name = "About" />
                <SidebarButton onClick = {() => setScreen(ScreenType.portfolio)}  name = "Portfolio" />
                <SidebarButton onClick = {() => setScreen(ScreenType.contact)}  name = "Contact" />
            </div>
        </div>
    )
}

export default SideBar
