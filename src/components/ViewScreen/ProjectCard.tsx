import React from 'react'
import styles from './css/ProjectCard.module.css';

interface Props {
    imageUrl: string,
    techStack?: String,
    projectURL: string
}

const ProjectCard = ({ imageUrl, techStack, projectURL }: Props) => {


    return (
        <div className={styles.projectCardContainer} onClick={() => window.location.href = projectURL} >
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <div className = {styles.techStackContainer} >
                <p className={styles.techStack} >{techStack}</p>
            </div>
        </div>
    )
}

export default ProjectCard;
