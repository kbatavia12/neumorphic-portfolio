import React from 'react'
import styles from './css/SkillsButton.module.css'

interface Props {
    name: String
}

const SkillsButton = ({ name }: Props) => {
    return (
        <div className={styles.buttonContainer} >
            <p>{name}</p>
        </div>
    )
}

export default SkillsButton;
