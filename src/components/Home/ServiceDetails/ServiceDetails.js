import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div style={{boxShadow: '0px 4px 80px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px', width: '300px',height: '300px'}} 
            className = "col-md-4 text-center m-3 p-4">
            
            <img style= {{height:'80px'}} src={service.img} alt=""/>
            
            <h5 className="mt-3">{service.name}</h5>
            <br/>
            <p className= "text-secondary">{service.description}</p>
           
        </div>
    );
};

export default ServiceDetails;