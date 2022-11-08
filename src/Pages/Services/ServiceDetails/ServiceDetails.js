import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetails.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ServiceDetails = () => {
    const { _id, title, img, price, rating, description } = useLoaderData();
    return (
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-lg-4">
                    <img src={img} className='w-100 rounded' alt="" />
                </div>
                <div className="col-lg-8">
                    <h1>{title}</h1>
                    <h4 className='mb-4'>Price: ${price} &nbsp;&nbsp;&nbsp;&nbsp; Ratings: {rating} </h4>
                    <p><strong>Details:</strong><br /> {description}</p>
                </div>
            </div>
            <div className='mt-5'>
                <h3 className='mb-3'>Reviews & Ratings: </h3>
                <div className='reviews'>
                    <div className="review">
                        <div className='review-user'>
                            <img src={img} alt="" />
                            <div>
                                <div className='mb-3'>
                                    <p className='m-0'>5 Star by</p>
                                    <h4>S. M. Sujan</h4>
                                </div>
                                <p className='m-0'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis assumenda blanditiis maxime beatae, aliquid officia impedit laboriosam animi. Porro qui quam doloremque corporis placeat. Corrupti eos reprehenderit optio adipisci aperiam!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h3 className='mb-3'>Leave a Review: </h3>
                <div className='create-review'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder="Your review here" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Your Rating(1-5)" max={5} min={1}/>
                        </Form.Group>
                        <Button className='primary_btn_custom' type="submit">
                            Post Review
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;