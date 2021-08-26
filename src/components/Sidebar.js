import React from 'react';
import styles from './styles/Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li>Dashboard</li>
                <li>Widget</li>
                <li>Reviews</li>
                <li>Customers</li>
                <li>Online Analysis</li>
                <li>Settings</li>
            </ul>
        </div>
    )
}

export default Sidebar;