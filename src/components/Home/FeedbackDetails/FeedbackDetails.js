import React from 'react';

const FeedbackDetails = ({feedback}) => {
    return (
        <div style={{border: '1px solid #BFBFBF', boxSizing: 'border-box', borderRadius:'4px',width: '370px',
        height: '212px'}} className = "col-md-4 m-3">
                <div className = "d-flex justify-content-center">
                    <img style= {{width: '80px', height: '80px'}} src={feedback.img} alt=""/>
                    <h4>{feedback.userName} <br/> <small>{feedback.companyName}</small> </h4>
                </div>
            
                <div>
                    <small>{feedback.description}</small>
                </div>
            </div>
        
    );
};

export default FeedbackDetails;