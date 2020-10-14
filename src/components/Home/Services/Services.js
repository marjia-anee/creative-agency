import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import mobile from '../../../images/icons/service1.png';
import graphic from '../../../images/icons/service2.png';
import web from '../../../images/icons/service3.png';


const Services = () => {

    const serviceData = [
        {
            name: 'Web & Mobile design',
            img: mobile,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique earum saepe hic illum a neque, sit assumenda accusamus porro culpa.'
        },

        {
            name: 'Graphic design',
            img: graphic,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique earum saepe hic illum a neque, sit assumenda accusamus porro culpa.'
        },
        {
            name: 'Web Development',
            img: web,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique earum saepe hic illum a neque, sit assumenda accusamus porro culpa.'
        }
    ]

    return (
        <section className = "container mt-5">
            <div className = "text-center">
                <h3>Provide awesome services</h3>
            </div>
            <div className="d-flex justify-content-center">
            <div className = "row mt-5">
                {
                    serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>
            </div>

        </section>
    );
};

export default Services;