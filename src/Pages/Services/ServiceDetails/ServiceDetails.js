import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import CreateReview from '../../CreateReview/CreateReview';
import ShowReview from '../../ShowReview/ShowReview';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, img, price, rating, description } = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err));
    }, [_id]);


    return (
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-lg-4">
                    <img src={img} className='w-100 rounded' alt="" />
                </div>
                <div className="col-lg-8">
                    <h1>{title}</h1>
                    <h4 className='mb-4'>Price: ${price} &nbsp;&nbsp;&nbsp;&nbsp; Ratings: {rating} </h4>
                    <p><strong>Details:</strong><br /> {description}</p>
                </div>
            </div>

            <div className='mt-5'>
                <h3 className='mb-3'>Reviews & Ratings: </h3>
                <div className='reviews'>
                    {

                        reviews.map(review => <ShowReview key={review._id} review={review}></ShowReview>) 
                    }
                </div>
            </div>

            {user?.uid ? <CreateReview _id={_id}></CreateReview> 
                :
                <div>
                    <p className='text-center bg-dark p-4 rounded fw-bold fs-4'>
                        Please <Link className='text-decoration-none' to='/login'>Login</Link> to add a review.
                    </p>
                </div>

            }
        </div>
    );

};

export default ServiceDetails;