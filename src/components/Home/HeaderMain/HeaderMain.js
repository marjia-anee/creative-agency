import React from 'react';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <div className = "container">
            <main className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 ml-3 mt-5">
                
                <h1> <b> Let’s Grow Your <br/> Brand To The <br/>Next Level </b> <br/></h1>
                <br/>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sequi, adipisci nisi modi beatae voluptas!</p>
                <br/>
                <button class="btn btn-dark">Hire us</button>

            </div>
            <div className="col-md-7 ml-5">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
            
        </main>
        </div>
    );
};

export default HeaderMain;