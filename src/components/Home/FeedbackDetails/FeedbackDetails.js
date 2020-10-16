import React from 'react';

const FeedbackDetails = ({feedback}) => {
    return (
        <div style={{marginBottom:'15px'}} className="col-md-4 mt-5" >

        <div className="card shadow mt-3">
            <div className="d-flex justify-content-start mt-4">
                <img className="mx-3" src={feedback.img} alt="" style={{borderRadius:'50px'}} width="60"/>
                <div className = "ml-3">
                    <h5>{feedback.userName}</h5>
                    <p>{feedback.companyName}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">{feedback.description}</p>
            </div>
            
       </div>
        </div>
        
    );
};

export default FeedbackDetails;