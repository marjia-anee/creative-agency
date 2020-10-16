import React, { useEffect, useState } from 'react';
import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';


const Feedback = () => {
    
    const [feedbacks, setFeedbacks] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/showReviews')
        .then(res=>res.json())
        .then(data=>{

            setFeedbacks(data)
            console.log(data)
        })

    },[])


    return (
        <section style={{ marginBottom: '15%'}} className="container mt-5 ">
            <div>
            <h2 className = "text-center">Clients <span className="text-success"> Feedback</span></h2>

            </div>
            <div className = "row d-flex justify-content-center">
            {
                feedbacks.map(feedback => <FeedbackDetails feedback={feedback}></FeedbackDetails>)
            }
            </div>
        </section>
    );
};

export default Feedback;