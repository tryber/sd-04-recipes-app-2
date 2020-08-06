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
  const [loading, setLoading] = useState(true);
  const type = path.includes('comidas') ? 'meal' : 'cocktail';
  const key = path.includes('comidas') ? 'Meal' : 'Drink';

  useEffect(() => {
    // console.log(type);
    getFoodById(type, id).then((resp) => {
      setFood(resp[0]);
      setLoading(false);
    });
  }, []);

  console.log(food);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <img data-testid="recipe-photo" src={food[`str${key}Thumb`]} alt={food[`str${key}`]} />
      <h1 data-testid="recipe-title">{food[`str${key}`]}</h1>
    </div>
  );
};

RecipeDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }).isRequired,
};

export default RecipeDetails;
