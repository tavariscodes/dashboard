import React from 'react';

import styles from './styles/Graph.module.css';

const Graph = () => {
    return(
        <div className={styles.graph}>
            <div className={styles.textArea}>
                <h5>Website Visitors</h5>
                <h3>821</h3>
            </div>
            <div className={styles.innerContainer}></div>
        </div>

    )
}

export default Graph;