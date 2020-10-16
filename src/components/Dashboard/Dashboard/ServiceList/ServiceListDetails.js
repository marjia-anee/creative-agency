import React from 'react';

const ServiceListDetails = ({order}) => {
    return (
        <section className = 'container'>
            


                <div className="card shadow-sm">
                    <div className="d-flex align-items-center">

                        {
                            order.image ? <img style={{ borderRadius: '50px' }} width="60" src={`data:image/png;base64,${order.image.img}`} />
                                :
                                <img style={{ borderRadius: '50px' }} width="60" className="img-fluid mb-3" src={`https://nameless-harbor-12344.herokuapp.com/${order.img}`} alt="" />
                        }
           
                    </div>
                            <div className="card-body">
                                <h6 className="text-primary">{order.serviceTitle} </h6>
                                <p className="card-text text-secondary mt-4">{order.projectDetails}</p>
                            </div>
                </div>
            
        </section>    

    );
};

export default ServiceListDetails;