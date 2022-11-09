import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useTitle from '../../utilities/useTitle';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    // Dynamic Title
    useTitle('My Reviews || Dent Care');

    // Get user for his/her email
    const { user } = useContext(AuthContext);

    // Reviews state for store reviews
    const [reviews, setReviews] = useState([]);

    // Get All reviews for this user by email
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err));
    }, [user?.email]);

    // Handle Edit the review
    const editReview = id => {

    }

    // Handle delete the review
    const deleteReview = id => {
        // Get confirmation from user
        const agree = window.confirm('Are you sure to delete this review?');
        if (agree) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    // Display Delete SuccessFull Toast
                    toast.success('Your Review Deleted Succesfully.', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })

                    // remove the deleted review from state
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }

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
                                <td className='text-center'>{index + 1}</td>
                                <td>{review?.service_title}</td>
                                <td>{review?.review_details}</td>
                                <td className='text-center' width={200}>
                                    <Link to={`/editReview/${review._id}`}>
                                        <button className='btn btn-primary'>
                                            <FaEdit /> Edit
                                        </button>
                                    </Link>
                                    
                                    &nbsp; &nbsp;
                                    <button className='btn btn-danger' onClick={() => deleteReview(review._id)}>
                                        <FaTrash /> Delete
                                    </button>
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