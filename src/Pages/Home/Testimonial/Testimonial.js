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
                <div className="col-md-6 mb-4 mb-md-0">
                    <div>
                        <h2 className='fw-bold fs-1'>What People Say</h2>
                        <p className=''>A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <Slider {...settings}>
                        <div className="testimonials">
                            <div className='review-user'>
                                <img src='https://lh3.googleusercontent.com/a/ALm5wu0IU6ggPA054Wk07bPeAE5KlIdcEIRypoDfO2FNkA=s96-c' alt="" />
                                <div>
                                    <div className='mb-3'>
                                        <h4>S.M. Sujan</h4>
                                    </div>
                                    <p className='m-0'>
                                        Quote testimonials are ads or artwork that display positive statements about your company from a brand evangelist or a delighted customer. The quote is usually accompanied by an image of the person being quoted to make the message more relatable to the target audience.
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
                                        Whether you like it or not, your social media channels will naturally capture customer testimonials. Social media offers instant relief for customers who have strong opinions about a product or service.
                                        A happy customer can simply take out their phone, write an emotional review.
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