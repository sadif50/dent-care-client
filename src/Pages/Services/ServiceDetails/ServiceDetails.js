import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ShowReview from '../../ShowReview/ShowReview';
import './ServiceDetails.css';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, img, price, rating, description } = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://dent-care-server.vercel.app/review/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err));
    }, [_id]);

    const handleAddReview = e => {
        // prevent form refresh
        e.preventDefault();

        // Get Reviewer Info
        const form = e.target;

        const service_id = _id;
        const service_title = title;
        const reviewer = user?.displayName;
        const reviewer_email = user?.email;
        const reviewer_img = user?.photoURL;
        
        // Get Form Data
        const review_details = form.review.value;
        const rating = form.rating.value;

        // Create Object For send data to server
        const review = {
            service_id,
            service_title,
            reviewer,
            reviewer_email,
            reviewer_img,
            review_details,
            rating
        }

        // Send data to server by post method
        fetch('https://dent-care-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset();
                
                // Set new review to current state
                const newReview = [review, ...reviews];
                setReviews(newReview);
                
                // Display SuccessFull Toast
                toast.success('Your Review Added Successfully.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }
        })
        .catch(err => console.error(err));
    }


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

            {user?.uid ? <div className='mt-5'>
            <h3 className='mb-3'>Leave a Review: </h3>
            <div className='create-review'>
                <Form onSubmit={handleAddReview}>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" name='review' placeholder="Your review here" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="number" name='rating' placeholder="Your Rating(1-5)" max={5} min={1} />
                    </Form.Group>
                    <button className='primary_btn_custom' type="submit">
                        Post Review
                    </button>
                </Form>
            </div>
        </div> 
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