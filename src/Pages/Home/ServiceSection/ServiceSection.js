import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Service from '../../Services/Service/Service';



const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err));
    }, []);

    console.log(services)


    return (
        <div className='mt-5'>
            <div className='text-center'>
                <h2 className='fw-bold fs-1'>Services</h2>
                <p className='w-75 mx-auto'>
                    Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora.
                </p>
            </div>
            <Row className='mt-4'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default ServiceSection;