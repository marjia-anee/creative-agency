import React, { useState } from 'react';


const OrderForm = () => {

        const [service,setService]=useState({})


        const handleForm = e => {
            setService({...service, [e.target.name]:e.target.value})
        }
    
    
        

    const handleSubmit = (event) => {
        const formData=new FormData()
        formData.append('file',service.img)
        formData.append('userName',service.userName)
        formData.append('email',service.email)
        formData.append('serviceTitle',service.serviceTitle)
        formData.append('projectDetails',service.projectDetails)
        formData.append('price',service.price)



        fetch('http://localhost:5000/addService', {
            method:'POST',
            body:formData
        })
    }
    
    return (
        <div>
                
            <div style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }} className="container-fluid row">
                
                        <div className="col-md-6 mt-5">
                                <textarea className="form-control" onBlur={handleForm} name='userName' cols="50" rows="2" placeholder="Your name/company's name Your"></textarea>                    
                                <br/>
                                <textarea className="form-control" onBlur={handleForm} name='email' cols="50" rows="2" placeholder="Email address"></textarea> 
                                <br/>
                                <textarea className="form-control" onBlur={handleForm} name='serviceTitle' cols="50" rows="2" placeholder="Title"></textarea> 
                                <br/>
                                <textarea className="form-control" onBlur={handleForm} name='projectDetails' cols="50" rows="4" placeholder="project Details"></textarea> 
                                <br/>    
                                    <input type="text" className="form-control" onBlur={handleForm} name='price' placeholder="Price" />
                                    <br/>
                                    <input onChange={event=>setService({...service, img:event.target.files[0]})} type="file"/>
                                    <p style={{color:'#009444'}}>Upload project file</p>
            
                                
                                <br/>
                            <div>
                                <button onClick={handleSubmit} style = {{width: '25%'}} className="btn btn-dark">Send</button>
                            </div>
                        </div>
                      
            </div>
        </div>
    );
};

export default OrderForm;