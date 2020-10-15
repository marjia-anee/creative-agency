import React, { useContext } from 'react';
import OrderForm from './OrderForm/OrderForm';
import Sidebar from './Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';


// const containerStyle = {
//     backgroundColor: "#F4FDFB",
//     height: "100%"
// }


const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <section>
        <p>Name: {loggedInUser.name}</p>

            <div className="container-fluid row">
                <div className="col-md-3">
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>

                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h3>Order</h3>
                    <OrderForm></OrderForm>
               </div> 
            </div>    
        </section>
    );
};

export default Dashboard;