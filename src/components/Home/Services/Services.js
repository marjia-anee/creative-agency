import React, { useEffect } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { useState } from 'react';


const Services = () => {

    const [serviceData, setServiceData] = useState([])
    
    
    useEffect( () => {
        fetch('http://localhost:5000/showServices')
        .then(res => res.json())
        .then(data =>{ 
            setServiceData(data)
            console.log(data)
        })
    }, [])
    
    

    return (
        <section style={{marginTop: '12%', marginBottom: '20%'}} className = "container">
            <div className = "text-center">
                <h3>Provide awesome <span className="text-success"> services</span></h3>
            </div>
            <div className="d-flex justify-content-center">
            <div className = "row w-75 mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                }
            </div>
            </div>

        </section>
    );
};

export default Services;