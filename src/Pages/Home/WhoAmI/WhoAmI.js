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
                            Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent metus metus ullamcorper.

                            Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent metus metus ullamcorper vel tincidunt sed class aptent taciti sociosqu ad litora torquent type setting industry when per conubia nostra.
                        </p>
                        <Link to='/services'>
                            <button className='primary_btn_custom'>Services That I Provide</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default WhoAmI;