import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../../images/logos/logo.png';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import { useForm } from 'react-hook-form';

const ReviewForm = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        const reviewData = {...data, ...loggedInUser}

        fetch('https://nameless-harbor-12344.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json(reviewData))
            .then(result => {
               
            })
    };


    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2 col-sm-6 col-12">
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>

                    <Sidebar></Sidebar>
                </div>
                <div className="container">
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                            <form onSubmit={handleSubmit(onSubmit)}>
                            <h5 className="text-brand">Review Form</h5>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"></label>
                                    <input type="text" required className="form-control" name="userName" placeholder="Your Name" ref={register({ required: true })} />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"></label>
                                    <input type="text" required className="form-control" name= 'companyName' cols="30" rows="10" placeholder="Designation, Company's Name" ref={register({ required: true })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"></label>
                                    <input type="text" required className="form-control"  name= 'description' cols="30" rows="10" placeholder="Description" ref={register({ required: true })} />
                                </div>
                                
                                <button style={{weight:'25%'}} type="submit" className="btn btn-dark">Submit</button>
                            </form>

                        </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewForm;