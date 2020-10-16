import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faGripHorizontal, faPlus, faUser, faFile, faShoppingCart, faComment } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([])

    useEffect(() => {
        fetch('https://nameless-harbor-12344.herokuapp.com/admin?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 p-4">

                    {admin.length ?
                        <div>
                            <div>
                                <Link to="/allOrderList">
                                    <FontAwesomeIcon icon={faFile} /> <span>Service list</span>
                                </Link>
                            </div>
                            
                            <div>
                                <Link to="/serviceAdd">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                </Link>
                            </div>
                            <div>
                                <Link to="/addAdmin">
                                    <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                                </Link>
                            </div>

                        </div>

                        : <div>
                            <div>
                                <Link to="/dashboard/order">
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                </Link>
                            </div>
                            <div>
                                <Link to="/dashboard/serviceList">
                                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Service List</span>
                                </Link>
                            </div>
                            <div>
                                <Link to="/dashboard/review">
                                    <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                                </Link>
                            </div>

                        </div>
                    }
                <div>
                    <Link to="/"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>


                
                
        </div>
    );
};

export default Sidebar;