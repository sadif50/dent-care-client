import React from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id, title, img, rating, price, description} = service;
    return (
        <Col lg={4} className='mb-4'>
            <div className='my-card'>
                <img src={img} alt="" />
                <h2>{title}</h2>
                <p className='d-flex justify-content-between align-items-end mb-2'>
                    <span>Price: <span className='fs-3'>${price}</span></span> <span>Ratings: {rating}</span>
                </p>
                <p>
                    {description.length > 100 ? description.slice(0, 100) : description} ...
                </p>
                <button className='btn btn-primary w-100'>Details</button>
            </div>
        </Col>
    );
};

export default Service;