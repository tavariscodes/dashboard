import React from 'react';
import styles from './styles/Layout.module.css';
import Sidebar from './Sidebar';

const Layout = ({children}) => {
    return(
        <div className={styles.wrapper}>
            <Sidebar/>
            {children}
        </div>
    )
}

export default Layout;
