import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';


const SocialSiteIcon = () => {
    return (
        <div className = "row col-md-2 offset-md-1">
            <div className="d-flex align-items-center m-5 p-5">

                <img style={{width: '140px', height: '36px'}} src={slack} alt=""/>
                <img style={{width: '140px', height: '36px'}} src={google} alt=""/>
                <img style={{width: '140px', height: '36px'}} src={uber} alt=""/>
                <img style={{width: '140px', height: '36px'}} src={netflix} alt=""/>
                <img style={{width: '140px', height: '36px'}} src={airbnb} alt=""/>

            </div>
            
        </div>
    );
};

export default SocialSiteIcon;