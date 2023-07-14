import React from 'react';

const StarRating = () => {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, index) => index);

  return (
    <div>
      {stars.map((starIndex) => (
        <span key={starIndex}>&#9733;</span>
      ))}
    </div>
  );
};

export default StarRating;
