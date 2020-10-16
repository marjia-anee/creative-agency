import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Dashboard/Dashboard/Sidebar/Sidebar';
import logo from '../../images/logos/logo.png';
import {useTransition, animated} from 'react-spring'


const Admin = () => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://nameless-harbor-12344.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                
            })
    };


        const [show, set] = useState(false)
        const transitions = useTransition(show, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })

    return (
        <section>
                <div className="col-md-2 col-sm-6 col-12">
                <img style={{ height: '60px', textAlign: 'center', marginLeft: '10%'}} src={logo} alt=""/>

                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                        <div className = "container">
                            <h4>New Admin Adding</h4>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="email" placeholder="jon@gmail.com" ref={register({ required: true })} /><br />
                                {errors.email && <span>your email is required<br /></span>}
                                <button className= "btn btn-primary">Submit</button>
                            </form>

                            {/* <div>
                            {transitions.map(({ item, key, props }) =>
item && <animated.div key={key} style={props}>✌️</animated.div>
)}
                            </div> */}
                        </div>
                    
                </div>
        </section>
    );
};

export default Admin;