import React from 'react';
import CarouselPart from '../CarouselPart/CarouselPart';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import SocialSiteIcon from '../SocialSiteIcon/SocialSiteIcon';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SocialSiteIcon></SocialSiteIcon>
            <Services></Services>
            <CarouselPart></CarouselPart>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;