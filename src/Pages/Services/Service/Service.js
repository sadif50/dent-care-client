import React from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, title, img, rating, price, description } = service;
    return (
        <Col lg={6} className='mb-4'>
            <div className='my-card'>
                <div className='service_box'>
                    <img src={img} alt="" />
                    <div className='service_text_box'>
                        <h2>{title}</h2>
                        <p className='d-flex justify-content-between align-items-end mb-2'>
                            <span>Price: <span className='fs-4'>${price}</span></span> <span>Ratings: {rating}</span>
                        </p>
                        <p className='m-0'>
                            {description.length > 100 ? description.slice(0, 100) : description} ...
                        </p>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                    <Link to={`/services/${_id}`}>
                        <button className='primary_btn_custom'>View Details</button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;