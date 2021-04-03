import React from 'react'
import styles from "./css/HomeScreen.module.css";

const HomeScreen = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className = {styles.name} >Karan <mark>Batavia</mark></h1>
            <h3 className = {styles.title} >Full Stack Development student</h3>
        </div>
    )
}

export default HomeScreen;
