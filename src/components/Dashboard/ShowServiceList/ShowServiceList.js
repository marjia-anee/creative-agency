import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';

const ShowServiceList = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://nameless-harbor-12344.herokuapp.com/serviceList')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="col-md-2 col-sm-6 col-12">
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>

                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 pr-5">
                    <div style={{ backgroundColor: '#E5E5E5' }}>
                    <div style={{ margin: '30px', borderRadius: '20px', backgroundColor: '#FFFFFF', fontWeight: 'bold'}}>
                        <table className="table" style={{ marginTop: '20px' }}>
                            <thead style={{width: 'auto',backgroundColor: '#F5F6FA', borderRadius: '20px' }}>
                                <tr style={{ margin: '20px' }}>
                                <th scope="col">#</th>

                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Project Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>

                            {orders.length === 0 ?
                            <h1 className = "text-center m-5">Loading...</h1>
                                : 

                                <tbody>
                                {orders.map(Lists =>

                                    <tr key={Lists._id}>
                                        <th scope="row">{Lists.itemId}</th>
                                        <td>{Lists.userName}</td>
                                        <td>{Lists.email}</td>
                                        <td>{Lists.serviceTitle}</td>
                                        <td>{Lists.ProjectDetails}</td>
                                        <td><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></td>
                                        <td>
                                            <select>
                                                <option className="text-danger"> pending</option>
                                                <option className="text-primary" > Done</option>
                                                <option className="text-secondary"> Ongoing</option>
                                            </select>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                            }
                            
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowServiceList;