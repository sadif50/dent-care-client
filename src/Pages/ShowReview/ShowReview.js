import React from 'react';

const ShowReview = ({ review }) => {
    const {reviewer, reviewer_img, review_details, rating} = review;

    console.log(reviewer_img);
    return (
        <div className="review">
            <div className='review-user'>
                <img src={reviewer_img} alt="" />
                <div>
                    <div className='mb-3'>
                        <p className='m-0'>{rating} Star by</p>
                        <h4>{reviewer}</h4>
                    </div>
                    <p className='m-0'>
                        {review_details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;