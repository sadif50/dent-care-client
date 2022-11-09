import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import {FaEdit, FaTrash} from 'react-icons/fa';
import useTitle from '../../utilities/useTitle';

const MyReviews = () => {
    // Dynamic Title
    useTitle('My Reviews || Dent Care');

    const {user} = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err));
    }, [user?.email]);

    console.log(reviews);

    return (
        <div className='container my-5'>
            <div className='text-center'>
                <h2 className='fw-bold fs-1'>All My Reviews</h2>
            </div>
            <hr className='my-5' />
            <div className="table-responsive">
                <table className='table table-bordered text-white'>
                    <thead>
                        <tr>
                            <th className='text-center'>SL</th>
                            <th>Service Name</th>
                            <th>Review</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review, index) => <tr key={review._id}>
                                <td className='text-center'>{index+1}</td>
                                <td>{review?.service_title}</td>
                                <td>{review?.review_details}</td>
                                <td className='text-center' width={200}>
                                    <button className='btn btn-primary'><FaEdit/> Edit</button>&nbsp; &nbsp;
                                    <button className='btn btn-danger'><FaTrash/> Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;