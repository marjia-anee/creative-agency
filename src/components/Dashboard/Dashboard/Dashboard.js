import React from 'react';
import OrderForm from './OrderForm/OrderForm';
import Sidebar from './Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';

// const containerStyle = {
//     backgroundColor: "#F4FDFB",
//     height: "100%"
// }


const Dashboard = () => {



    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2 col-sm-6 col-12">
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>

                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 pr-5 d-flex justify-content-center">
                    <OrderForm></OrderForm>
                    
               </div> 
            </div>    
        </section>
    );
};

export default Dashboard;