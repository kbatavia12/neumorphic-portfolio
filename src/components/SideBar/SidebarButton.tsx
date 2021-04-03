import React from 'react'
import { useScreen } from '../../ScreenContext';
import styles from './css/SidebarButton.module.css';


interface Props {
    name: String,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const SidebarButton = ({ name, onClick }: Props) => {

    
    return (
        <button onClick = {onClick} className = {styles.buttonContainer} >
            <p>{name}</p>
        </button>
    )
}



export default SidebarButton;
