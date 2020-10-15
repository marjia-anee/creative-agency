import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../../images/logos/logo.png';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const ReviewForm = () => {

    const [info] = useContext(UserContext);
    const [review, setReview] = useState({})

    const handleReviewForm =(event)=>{
        event.preventDefault()

        fetch('http://localhost:5000/addReview', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(review)
        })
        .then(response => response.json())
        .then(result=>{
            console.log(result)
        })
    }

    const handleData = (event)=>{
        setReview({...review, [event.target.name]:event.target.value, img:info.user?.img})
    }

    return (
        <div className="container-fluid row mt-3">
            <div className="col-md-3">
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>

                    <Sidebar></Sidebar>
                </div>
             <div  className = "col-md-6 mt-5">
             <h3>Order</h3>

               <form onSubmit={handleReviewForm} className = "mt-5"style={{ height: '80%', width: '100%', backgroundColor: "#F4FDFB", position: "absolute"}}>
                <br/>
                <textarea className="form-control" onBlur={handleData} name= 'userName' cols="20" rows="2" placeholder="Your name"></textarea>                    <br/>
                   
                <textarea className="form-control" onBlur={handleData} name= 'companyName' cols="20" rows="2" placeholder="Designation, Company's name"></textarea>                    <br/>
  
                <textarea className="form-control" onBlur={handleData} name= 'description' cols="20" rows="5" placeholder="Description"></textarea>                    <br/>

                <div>
                    <button style = {{width: '25%'}} className="btn btn-dark">Submit</button>
                </div>
               </form>
                </div>
        </div>
    );
};

export default ReviewForm;