import React from 'react';
import styles from './styles/Datacard.module.css'

const Datacard = ({children, title, text}) => {
    let defaultData = 
    <div className={styles.datacard}>
        <div>
            <p className={styles.cardtext}>{title}</p>
            <h2 className={styles.cardtext}>{text}</h2>
        </div>
    
    </div>
    let secondaryData = <div className={styles.datacard}>{children}</div>   // if no text or title specified
    return(
        title ? defaultData : secondaryData
    )
}

export default Datacard;