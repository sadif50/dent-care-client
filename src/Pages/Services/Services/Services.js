import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='container mt-5'>
            <div className='text-center'>
                <h2 className='fw-bold fs-1'>All Services That I Provide</h2>
            </div>
            <hr className='my-5' />
            <Row className='mt-4'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;