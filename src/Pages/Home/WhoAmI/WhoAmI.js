import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import dentist from '../../../assets/person/dentist.png';
import './WhoAmI.css';



const WhoAmI = () => {
    return (
        <div className="bg-dark rounded">
            <Row className='mt-5 py-5'>
                <Col lg={6} className='text-center'>
                    <img className='dentist_photo' src={dentist} alt="" />
                </Col>
                <Col lg={6}>
                    <div className="p-3">
                        <p className='text-danger fw-bold'>WHO AM I</p>
                        <h2 className='mb-5'>DR. MOHAMMAD</h2>
                        <h5>Professional Dentist</h5>
                        <p>
                        A dentist provides care for a patient’s teeth, gums, and oral health. They provide a number of services. Dentists repair fractured teeth, fill cavities, remove tooth decay, straighten teeth, place sealants, whiten patient’s teeth, and educate on proper oral hygiene. They also must diagnose what is going on with a patient’s mouth so they read X-rays as well and look for potential jaw problems, gum disease, or cavities.
                        </p>
                        <Link to='/services' className='mt-4 d-inline-block'>
                            <button className='primary_btn_custom'>Services That I Provide</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default WhoAmI;