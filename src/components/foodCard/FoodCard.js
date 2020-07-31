import React from 'react';

const FoodCard = ({ thumb, str }) => {
  return (
    <div>
      <img src={thumb} alt={str} />
      <p>{str}</p>
    </div>
  );
};

export default FoodCard;
