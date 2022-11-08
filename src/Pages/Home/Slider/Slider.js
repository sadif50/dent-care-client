import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide3 from '../../../assets/home/slide/slide3.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel className='mt-5 shadow-sm'>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={slide3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome !</h3>
                    <p>I am <span className='text-danger'>Dr. Mohammad</span></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={slide3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>I'm a Dental Specialist</h3>
                    <p>
                        Checkout my services
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={slide3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Smile With Confidence</h3>
                    <p>
                        PERSONALIZED, HIGH QUALITY DENTAL CARE
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;