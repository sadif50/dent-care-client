import React from 'react';
import ServiceSection from '../ServiceSection/ServiceSection';
import Slider from '../Slider/Slider';
import WhoAmI from '../WhoAmI/WhoAmI';

const Home = () => {
    return (
        <div className='container'>
            <Slider></Slider>
            <ServiceSection></ServiceSection>
            <WhoAmI></WhoAmI>
        </div>
    );
};

export default Home;