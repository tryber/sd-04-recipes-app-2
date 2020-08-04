import React from 'react';
import PropTypes from 'prop-types';

const FoodCard = ({ thumb, str }) => (
  <div>
    <img src={thumb} alt={str} />
    <p>{str}</p>
  </div>
);

export default FoodCard;

FoodCard.propTypes = {
  thumb: PropTypes.string.isRequired,
  str: PropTypes.string.isRequired,
};
