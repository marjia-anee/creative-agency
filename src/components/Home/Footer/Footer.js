import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-container">
            <div className = "user-form row m-5">
                <div className="col-md-6">
                    <h2>Let us handle your <br/> project, professionally. </h2>
                    <small>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general. </small>
                </div>
                <div className="col-md-6">
                    <input class="form-control form-control-lg" type="text" placeholder="Your email address"/>
                    <br/>
                    <input class="form-control form-control-lg" type="text" placeholder="Your name/company's name"/>
                    <br/>
                    <input class="form-control form-control-lg" type="text" placeholder="Your message"/>
                    <br/>

                    <div className="">
                        <button className="btn btn-dark">Send</button>
                    </div>
                </div>
            </div>
            <div className="copyRight text-center">
                    <small>Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
                </div>
        </section>
    );
};

export default Footer;