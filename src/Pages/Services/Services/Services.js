import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Service from '../Service/Service';
import { PhotoProvider } from 'react-photo-view';
import useTitle from '../../../utilities/useTitle';


const Services = () => {
    // Dynamic Title
    useTitle('Services || Dent Care');

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='container my-5'>
            <div className='text-center'>
                <h2 className='fw-bold fs-1'>All Services That I Provide</h2>
            </div>
            <hr className='my-5' />
            <Row className='mt-4'>
                <PhotoProvider>
                {
                    services.map((service, index) => <Service key={service._id} index={index} service={service}></Service>)
                }
                </PhotoProvider>
            </Row>
        </div>
    );
};

export default Services;