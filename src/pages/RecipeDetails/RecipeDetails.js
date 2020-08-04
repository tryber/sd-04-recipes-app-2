import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMealById } from '../../services/api';

const RecipeDetails = ({
  match: {
    params: { id },
  },
}) => {
  const [meal, setMeal] = useState(null);
  useEffect(() => {
    getMealById(id).then(setMeal);
  }, []);

  console.log(meal);
  return <div>Hello food. {id}</div>;
};

RecipeDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RecipeDetails;
