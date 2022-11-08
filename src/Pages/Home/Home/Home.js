import React from 'react';
import ServiceSection from '../ServiceSection/ServiceSection';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';
import WhoAmI from '../WhoAmI/WhoAmI';

const Home = () => {
    return (
        <div className='container'>
            <Slider></Slider>
            <ServiceSection></ServiceSection>
            <WhoAmI></WhoAmI>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;