import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
// import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/orderForm/dashboard">
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList/dashboard">
                    </Link>
                </li>
                <li>
                    <Link to="/reviewForm/dashboard">
                    </Link>
                </li>
                {/* <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                    </Link>
                </li> */}
            </ul>
            <div>
                <Link to="/"> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;