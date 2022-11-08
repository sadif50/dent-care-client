import React from 'react';
import ServiceSection from '../ServiceSection/ServiceSection';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='container'>
            <Slider></Slider>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;