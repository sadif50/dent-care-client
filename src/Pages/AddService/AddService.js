import React from 'react';
import useTitle from '../../utilities/useTitle';

const AddService = () => {
    // Dynamic Title
    useTitle('Add Service || Dent Care');
    
    return (
        <div>
            <h2>Add Service</h2>
        </div>
    );
};

export default AddService;