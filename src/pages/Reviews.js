import React, { useState } from 'react';
import ReviewForm from '../components/ReviewForm';
import './Reviews.css';
const ReviewPage = () => {
  const [reviews, setReviews] = useState([{
    name: 'John Doe',
    rating: 4,
    comment: 'Great shoes! Excellent quality.'
  },
  {
    name: 'Jane Smith',
    rating: 5,
    comment: 'Amazing selection and fast delivery.'
  },
  {
    name: 'Daniel Wagner',
    rating: 5,
    comment: 'Refurbished shoes were great, would buy here again.'
  }]);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className='review-page'>
      <h1>Customer Reviews</h1>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul className='review-list'>
          {reviews.map((review, index) => (
            <li key={index} className='review-item' style = {{border: '1px'}}>
              <h3>{review.name}</h3>
              <p>Rating: {review.rating}</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
};

export default ReviewPage;
