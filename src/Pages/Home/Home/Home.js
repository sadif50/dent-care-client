import React from 'react';
import useTitle from '../../../utilities/useTitle';
import ServiceSection from '../ServiceSection/ServiceSection';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';
import WhoAmI from '../WhoAmI/WhoAmI';

const Home = () => {
    // Dynamic Title
    useTitle('Home || Dent Care');
    
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