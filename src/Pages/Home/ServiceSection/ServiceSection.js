import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service/Service';
import { PhotoProvider } from 'react-photo-view';




const ServiceSection = () => {
    const [services, setServices] = useState([]);

    // Load only three last posted data by sending limit with query
    useEffect(() => {
        fetch('https://dent-care-server.vercel.app/services?limit=3')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err));
    }, []);


    return (
        <div className='pt-5'>
            <Row className='mt-4'>
                <Col lg={6}>
                    <div>
                        <p className='text-danger fw-bold'>WHAT I DO</p>
                        <h2 className='fw-bold fs-1 mb-3'>My Services</h2>
                        <p className='w-75'>
                        A dentist diagnoses and treats diseases of the teeth and the mouth. They clean your teeth, remove teeth, remove tooth decay, fill your teeth, treat gum disease and provide education on how to care for your teeth and mouth.
                        </p>
                    </div>
                </Col>
                <PhotoProvider>
                {
                    services.map((service, index) => <Service key={service._id} index={index} service={service}></Service>)
                }
                </PhotoProvider>
            </Row>
            <div className='text-center mt-3'>
                <Link to='/services' className='primary_btn_custom py-2 px-5'>
                    See All
                </Link>
            </div>
        </div>
    );
};

export default ServiceSection;