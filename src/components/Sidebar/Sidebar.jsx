import React from 'react';
import "./Sidebar.css";
import logo from '../../assets/logo2.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="sidebar-brand-text mx-3">RuangAdmin</div>
                    </a>
                    <hr className="sidebar-divider my-0" />
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <hr className="sidebar-divider" />
                    {/* <div className="sidebar-heading">
                        Features
                    </div> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-target="#collapseBootstrap"
                            aria-expanded="true" aria-controls="collapseBootstrap">
                            <i className="far fa-fw fa-window-maximize"></i>
                            <span>Bootstrap UI</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-target="#collapseForm" aria-expanded="true"
                            aria-controls="collapseForm">
                            <i className="fab fa-fw fa-wpforms"></i>
                            <span>Forms</span>
                        </a>
                        <div id="collapseForm" className="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Forms</h6>
                                <a className="collapse-item" href="form_basics.html">Form Basics</a>
                                <a className="collapse-item" href="form_advanceds.html">Form Advanceds</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-target="#collapseTable" aria-expanded="true"
                            aria-controls="collapseTable">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tables</span>
                        </a>
                        <div id="collapseTable" className="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Tables</h6>
                                <a className="collapse-item" href="simple-tables.html">Simple Tables</a>
                                <a className="collapse-item" href="datatables.html">DataTables</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="ui-colors.html">
                            <i className="fas fa-fw fa-palette"></i>
                            <span>UI Colors</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
