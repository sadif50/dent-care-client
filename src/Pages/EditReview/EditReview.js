import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../utilities/useTitle';
import { toast } from 'react-toastify';

const EditReview = () => {
    // Dynamic Title
    useTitle('Update Review || Dent Care');

    const review = useLoaderData();
    const navigate = useNavigate();

    const handleEdit = e => {
        // prevent form refresh
        e.preventDefault();

        // get form data
        const form = e.target;
        const review_details = form.review_details.value;
        const rating = form.rating.value;

        // create updated review object to send server
        const updateReview = {
            review_details,
            rating
        }

        // Send updated data to server
        fetch(`http://localhost:5000/review/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                // Display SuccessFull Toast
                toast.success('Your Review Updated Successfully.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                // navigate to My reviews
                navigate('/myReview');
            }
        })



        console.log(updateReview)

    }

    return (
        <div className='container my-5'>
            <div className='text-center'>
                <h2 className='fw-bold fs-1'>Update Review</h2>
            </div>
            
            <hr className='my-5' />
            <div className='mb-3 fs-4'>
               Updte your review for  <strong>{review.service_title}</strong> Service.
            </div>
            <Form onSubmit={handleEdit}>
                <Form.Group className="mb-3">
                    <Form.Control as="textarea" name='review_details' defaultValue={review.review_details} placeholder="Your review here" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" name='rating' defaultValue={review.rating} placeholder="Your Rating(1-5)" max={5} min={1} />
                </Form.Group>
                <Button className='primary_btn_custom' type="submit">
                    Update Review
                </Button>
            </Form>
        </div>
    );
};

export default EditReview;