import React from 'react';
import Layout from '../../components/Layout';
import Datacard from '../../components/Datacard';
import './style.css';
import Graph from '../../components/Graph';

const Dashboard = () => {
    return (
        <Layout>
            <div className="dashboard">
                <div className="top-container">
                    <Datacard title="Reviews" text="1246"/>
                    <Datacard title="Average Rating" text="4.6"/>
                    <Datacard>
                        <p> Sentiment Analysis </p>
                        <ul className="dataList">
                            <li>960</li>
                            <li>122</li>
                            <li>321</li>
                        </ul>
                    </Datacard>
                </div>
                <div className="bottom-container"> 
                    <Graph/>
                </div>
            </div>
        </Layout>
        
    )
}

export default Dashboard;
