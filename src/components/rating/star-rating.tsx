import React from 'react';

interface StarRatingProps {
  rating: number; 
  maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const starRating = index + 1;
    return (
      <span key={index} className={starRating <= rating ? 'text-yellow-500' : 'text-gray-300'}>
        ★
      </span>
    );
  });

  return <div className="flex">{stars}</div>;
};

export default StarRating;

