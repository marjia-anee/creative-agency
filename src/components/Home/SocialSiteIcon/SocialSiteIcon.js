import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';


const SocialSiteIcon = () => {
    return (
        <div className = "container">
            <div className="d-flex justify-content-center m-5 p-3">
                <div className="col-md-3 d-flex justify-content-center">
                <img style={{width: '50%', height: '40px'}} src={slack} alt=""/>

                </div>
                <div className="col-md-3 d-flex justify-content-center">
                <img style={{width: '140px', height: '40px'}} src={google} alt=""/>

                </div>
                <div className="col-md-3 d-flex justify-content-center">
                <img style={{width: '140px', height: '40px'}} src={uber} alt=""/>

                </div>
                <div className="col-md-3 d-flex justify-content-center">
                <img style={{width: '140px', height: '40px'}} src={netflix} alt=""/>

                </div>
                <div className="col-md-3">
                <img style={{width: '140px', height: '40px'}} src={airbnb} alt=""/>

                </div>

            </div>
            
        </div>
    );
};

export default SocialSiteIcon;