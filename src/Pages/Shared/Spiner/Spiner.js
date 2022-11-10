import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Spiner = () => {
    return (
        <div className='text-center my-5 py-5'>
            <div className="my-5 py-5">
            <Spinner animation="border" variant="primary" />
            </div>
        </div>
    );
};

export default Spiner;