import React from 'react'
import styles from './css/SidebarButton.module.css';


interface Props {
    name: String,
    value: String
}

const SidebarButton = ({ name, value }: Props) => {

    
    return (
        <button className = {styles.buttonContainer} >
            <p>{name}</p>
        </button>
    )
}



export default SidebarButton;
