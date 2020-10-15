import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const ServiceDetails = ({service}) => {

    const [details,setDetails]=useContext(UserContext)

    const history=useHistory()

    const handleServiceDetails = () => {

        setDetails({...details, service:service})
        
        history.push('/dashboard/order')
    }
    return (
        <div onClick={handleServiceDetails} style={{boxShadow: '0px 4px 80px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px', width: '300px',height: '300px'}} 
            className = "col-md-4 text-center m-3 p-4">
            
            <img style= {{height:'80px'}} src={`data:${service.img.contentType};base64,${service.img.img}`} alt=""/>
            
            <h5 className="mt-3">{service.serviceTitle}</h5>
            <br/>
            <p className= "text-secondary">{service.projectDetails}</p>
           
        </div>
        
    );
};

export default ServiceDetails;