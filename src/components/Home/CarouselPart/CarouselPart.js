import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../../images/carousel-1.png';
import img2 from '../../../images/carousel-2.png';
import img3 from '../../../images/carousel-3.png';
import img4 from '../../../images/carousel-4.png';
import img5 from '../../../images/carousel-5.png';

    

const CarouselPart = () => {
    return (
            <section style={{width: '100%',
            height: '100%', background: '#111430',backgroundSize: 'cover',marginBottom: '10%'
        }} className="mt-5 p-5 ">
                <div  className = "m-3 p-2">
                    <h2 className="text-center" style={{color: 'white',}}>Here are some of <span className="text-primary"> our works</span></h2>
                </div>

                <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={true}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    }
                }}
                showDots={true}
                sliderClass=""
                slidesToSlide={2}
                swipeable
                >

                <img style={{width: '468px', height: '400px', padding: '50px'}}src={img1} alt=""/>  
                <img style={{width: '468px', height: '400px', padding: '50px'}}src={img2} alt=""/>  
                <img style={{width: '468px', height: '400px',padding: '50px'}}src={img3} alt=""/>  
                <img style={{width: '468px', height: '400px',padding: '50px'}}src={img4} alt=""/>  
                <img style={{width: '468px', height: '400px', padding: '50px'}}src={img5} alt=""/>  

        
            </Carousel>
    
            </section>
    );
};

export default CarouselPart;