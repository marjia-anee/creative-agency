import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({service}) => {
    return (
      
        <div style={{padding: '20px 40px', boxShadow: '10px 10px 40px rgba(0, 0, 0, 0.1)',textDecoration: 'none',}}  className="col-md-4 text-center">
        <Link to={`/service/item/${service._id}`}>
            <img style={{ height: '80px' }} src={service.img} alt="" />
            {
                service.image ? <img style={{ height: '80px' }} src={`data:image/png;base64,${service.image.img}`} />
                    :
                    <img style={{ height: '80px' }} className="img-fluid mb-3" src={`https://nameless-harbor-12344.herokuapp.com/${service.img}`} alt="" />
            }
            <h5 className="mt-3 mb-3">{service.serviceTitle}</h5>
            <p className="text-secondary">{service.projectDetails}</p>
        </Link>
    </div>
        
    );
};

export default ServiceDetails;