import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../utilities/useTitle';

const EditReview = () => {
    // Dynamic Title
    useTitle('Update Review || Dent Care');

    const storedReview = useLoaderData();
    const [review, setReview] = useState(storedReview);

    return (
        <div className='container my-5'>
            <div className='text-center'>
                <h2 className='fw-bold fs-1'>Update Review</h2>
            </div>
            <hr className='my-5' />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control as="textarea" name='review_details' placeholder="Your review here" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" name='rating' placeholder="Your Rating(1-5)" max={5} min={1} />
                </Form.Group>
                <Button className='primary_btn_custom' type="submit">
                    Update Review
                </Button>
            </Form>
        </div>
    );
};

export default EditReview;