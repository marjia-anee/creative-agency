import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logos/logo.png';
import Sidebar from '../Sidebar/Sidebar';
import ServiceListDetails from './ServiceListDetails';


const ServiceList = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);


  const [orders, setOrders] = useState([])

  useEffect(() => {

      fetch('https://nameless-harbor-12344.herokuapp.com/showOrders?email=' + loggedInUser.email)
          .then(res => res.json())
          .then(data => setOrders(data))
  }, [])

    return (
      <section>
      <div className="row">
          <div className="col-md-2 col-sm-6 col-12">
          <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>

              <Sidebar></Sidebar>
          </div>
          <div className="services-container mt-5">
          <div className=" row col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
              <div>
              <h5 className="text-brand">Your Service Lists</h5>

              </div>

              <div className="d-flex justify-content-center">
                  {orders.length === 0 ?
                      <h1>Loading...</h1>
                      : <div className="row">
                          {
                              orders.map(order => <ServiceListDetails key={order._id} order={order}></ServiceListDetails>)
                          }

                      </div>
                  }

              </div>
              </div>
          </div>
      </div>
  </section>

    );
};

export default ServiceList;