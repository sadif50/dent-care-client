import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service/Service';



const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services?limit=3')
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
                            Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora.
                        </p>
                    </div>
                </Col>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
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