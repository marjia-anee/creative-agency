import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../../images/logos/logo.png';

const NewService = () => {
    const [service, setService]=useState({});
        const [file, setFile] = useState(null);

        const handleBlur = e => {
            const newService = { ...service };
            newService[e.target.name] = e.target.value;
            setService(newService);
        }


        const handleFileChange = (e) => {
            const newFile = e.target.files[0];
            setFile(newFile);
        }
    
    
    const handleSubmit = () => {
        const formData=new FormData()
        formData.append('file', file);
        formData.append('userName',service.userName)
        formData.append('email',service.email)
        formData.append('serviceTitle',service.serviceTitle)
        formData.append('projectDetails',service.projectDetails)



        fetch('http://localhost:5000/addService', {
            
            method:'POST',
            body:formData
        })
        .then(response => response.json())
            .then(data => {
                console.log(data);
                
            })

            .catch(error => {
                console.error(error)
            });
    }

    return (
        <section>
        <div className = "col-md-2 col-sm-6 col-12">
        <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>

                <Sidebar></Sidebar>
                </div>
                
                <section className="container-fluid row">
                    <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                        <h5 className="text-brand">Add New Service</h5>
                        <form onSubmit={handleSubmit}>
                            {/* <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Your Name</label>
                                <input onBlur={handleBlur} type="text" required className="form-control" name="userName" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input onBlur={handleBlur} type="email" required className="form-control" name="email" placeholder="Enter email" />
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Service</label>
                                <input onBlur={handleBlur} type="text" required className="form-control" name="serviceTitle" placeholder="service Name" />
                            </div>
                            <div>
                                <label htmlFor="exampleInputPassword1">Description</label>
                                <textarea onBlur={handleBlur} name="projectDetails" className="form-control" cols="20" rows="10" required placeholder="Message *"></textarea><br />

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Upload a image</label>
                                <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </section>
            
        </section>
    );
};

export default NewService;