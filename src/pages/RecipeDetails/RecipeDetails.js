import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFoodById } from '../../services/api';

const RecipeDetails = ({
  match: {
    params: { id },
    path,
  },
}) => {
  const [food, setFood] = useState(null);
  const type = path.includes('comidas') ? 'meal' : 'cocktail';
  useEffect(() => {
    console.log(type);
    getFoodById(type, id).then(setFood);
  }, []);

  console.log(food);
  return <div>Hello food. {id}</div>;
};

RecipeDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }).isRequired,
};

export default RecipeDetails;
