import React from 'react'
import "./Mainlayout.css";
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const Mainlayout = ({ children }) => {
    return (
        <div className="layout-container">

            <div className="content-area">
                <Header />
                <main className="main-content">{children}</main>
            </div>
            <Sidebar />
        </div>
    )
}

export default Mainlayout