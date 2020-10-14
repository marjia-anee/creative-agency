import React, { useContext } from 'react';
import OrderForm from './Sidebar/OrderForm/OrderForm';
import ReviewForm from './Sidebar/ReviewForm/ReviewForm';
import ServiceList from './Sidebar/ServiceList/ServiceList';
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
            <div className="container-fluid row">
                <div className="col-md-3">
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>

                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                <OrderForm></OrderForm>
                <ServiceList></ServiceList>
                <ReviewForm></ReviewForm>

                </div>
                <div className="col-md-3">
                <p>Name: {loggedInUser.name}</p>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;