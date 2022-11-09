import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const CreateReview = ({_id, title}) => {

    const {user} = useContext(AuthContext);

    const handleAddReview = e => {
        // prevent form refresh
        e.preventDefault();

        const form = e.target;

        // Get Reviewer Info
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
        fetch('http://localhost:5000/review', {
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
        <div className='mt-5'>
            <h3 className='mb-3'>Leave a Review: </h3>
            <div className='create-review'>
                <Form onSubmit={handleAddReview}>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" name='review' placeholder="Your review here" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="number" name='rating' placeholder="Your Rating(1-5)" max={5} min={1} />
                    </Form.Group>
                    <Button className='primary_btn_custom' type="submit">
                        Post Review
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CreateReview;