import React from 'react'
import styles from './css/ContactScreen.module.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Nashik from "../../assets/Nashik.png"

const ContactScreen = () => {
    return (
        <div className={styles.contactContainer} >
            <div>
                <h1>Contact Me!</h1>
            </div>
            <div className={styles.map} >
                <img src={Nashik} alt="" width={"100%"} />
            </div>
            <div className={styles.contactDetails} >
                <h3>Email </h3>
                <p style={{ marginTop: '1%', fontWeight: 'bold' }} ><mark>Work</mark>: kdbatavia010120@kkwagh.edu.in</p>
                <p style={{ marginTop: '1%', fontWeight: 'bold' }} ><mark>Personal</mark>: kbatavia12@gmail.com </p>
            </div>
            <div style={{ width: "100%", display: 'flex', justifyContent: 'center', marginTop: '2%' }} >
                <div className={styles.socialIconsContainer} >
                    <div className={styles.iconContainer} >
                        <a href="https://www.linkedin.com/in/karan-batavia-b4587a194/"><LinkedInIcon fontSize={"large"} className={styles.materialIconLinkedIn} /></a>
                    </div>
                    <div className={styles.iconContainer}>
                        <a href="https://github.com/kbatavia12"><GitHubIcon fontSize={"large"} className={styles.materialIconGithub} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactScreen;
