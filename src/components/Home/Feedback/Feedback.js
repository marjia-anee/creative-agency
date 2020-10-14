import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';


const clientFeedback = [
    { 
        name: 'Nash Patrik', 
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deleniti quod ipsam. Voluptates suscipit sed sint maxime dolor optio reiciendis.',
        img: customer1
    },
    { 
        name: 'Miriam Barron', 
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deleniti quod ipsam. Voluptates suscipit sed sint maxime dolor optio reiciendis.',
        img: customer2
    },
    { 
        name: 'Bria Malone', 
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium deleniti quod ipsam. Voluptates suscipit sed sint maxime dolor optio reiciendis.',
        img:customer3
    }
]

const Feedback = () => {
    return (
        <section className="d-flex justify-content-center container">
            <div className = "row">
            {
                clientFeedback.map(info => <FeedbackDetails info={info}></FeedbackDetails>)
            }
            </div>
        </section>
    );
};

export default Feedback;