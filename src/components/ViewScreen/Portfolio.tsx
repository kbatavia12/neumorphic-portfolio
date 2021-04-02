import React from 'react';
import styles from './css/Portfolio.module.css';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
    return (
        <div className={styles.portfolioContainer} >
            <h1>My Projects</h1>

            {/* <div> */}
                <div className={styles.cardHolder} >
                    <ProjectCard
                        projectURL={'https://play.google.com/store/apps/details?id=com.konnect_client'}
                        techStack={'React Native, ExpressJS, Firebase, Socket.io'}
                        imageUrl={"https://play-lh.googleusercontent.com/Ed6V3Bw-xsClA2pbFML1hC8xg1SSlW4rM7tjC0M17h2KX-NwQzSt9y4OZHUn4_DVig=s180-rw"} />
                    <ProjectCard
                        projectURL={'https://play.google.com/store/apps/details?id=com.pesnashikexamapp'}
                        techStack={"React Native, Firebase, ReactJS, Redux"} imageUrl={"https://play-lh.googleusercontent.com/WnG5bM-g5mHUsYdkpZ2BkUC8frzoWJD3WJfctubbwHJNnsX-sgu0Qjay-YHs5peLYcVl=s180-rw"} />
                </div>
            {/* </div> */}

        </div>
    )
}

export default Portfolio;
