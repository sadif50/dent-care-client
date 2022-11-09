import React from 'react';
import useTitle from '../../utilities/useTitle';

const MyReviews = () => {
    // Dynamic Title
    useTitle('My Reviews || Dent Care');

    return (
        <div>
            <h2>My Review</h2>
        </div>
    );
};

export default MyReviews;