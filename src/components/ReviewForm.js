import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new review object
    const newReview = {
      name,
      rating,
      comment
    };

    // Call the parent component's function to add the review
    onAddReview(newReview);

    // Clear the form inputs
    setName('');
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          min={0}
          max={5}
          onChange={handleRatingChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
