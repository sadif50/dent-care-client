import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css';

const Testimonial = () => {

    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='my-5 py-5'>
            <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <div>
                        <p className='text-danger fw-bold'>WHAT PEOPLE SAY</p>
                        <h2 className='fw-bold fs-1 mb-3'>Testimonials</h2>
                        <p className='w-75'>
                        In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. 
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <Slider {...settings}>
                        <div className="testimonials">
                            <div className='review-user'>
                                <img src='https://lh3.googleusercontent.com/a/ALm5wu0IU6ggPA054Wk07bPeAE5KlIdcEIRypoDfO2FNkA=s96-c' alt="" />
                                <div>
                                    <div className='mb-3'>
                                        <h4>S.M. Sujan</h4>
                                    </div>
                                    <p className='m-0'>
                                    Thank you Dr. Mohammad for the great experience and quality work you have done on my teeth. I am usually apprehensive about needles and it was no sweat at all. In fact, I am ready for the next needle, thanks to your gentle touch. My family and I have been pleased with your professional, yet personable, service. See you soon.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials">
                            <div className='review-user'>
                                <img src='https://lh3.googleusercontent.com/a/ALm5wu0IU6ggPA054Wk07bPeAE5KlIdcEIRypoDfO2FNkA=s96-c' alt="" />
                                <div>
                                    <div className='mb-3'>
                                        <h4>Sadif Mostafa</h4>
                                    </div>
                                    <p className='m-0'>
                                    Dr. Mohammad is an excellent dentist. He took the time to explain every procedure He was doing. For example, when I got my teeth whitened, Dr. Mohammad was very supportive, and thorough when explaining the process. He is a professional and has a naturally lovely personality. I would recommend Dr. Mohammad to everyone. He is the best dentist I have ever had.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;