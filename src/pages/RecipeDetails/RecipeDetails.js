import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Ingredients, Instructions, Video, Recomendations, Category } from '../../components';
import Button from '../../styledComponents/button/styles';
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
  const inProgress = path.includes('in-progress');
  const key = path.includes('comidas') ? 'Meal' : 'Drink';
  const foodType = path.includes('comidas') ? 'comidas' : 'bebidas';

  useEffect(() => {
    getFoodById(type, id).then((resp) => {
      setFood(resp[0]);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <img data-testid="recipe-photo" src={food[`str${key}Thumb`]} alt={food[`str${key}`]} />
      <h1 data-testid="recipe-title">{food[`str${key}`]}</h1>
      <Category food={food} type={type} />
      <button type="button" data-testid="share-btn">
        Icone twitter
      </button>
      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>
      <Ingredients food={food} path={path} />
      <Instructions instructions={food.strInstructions} />
      {!inProgress && <Video key={key} food={food} />}
      {!inProgress && <Recomendations type={type} />}
      {!inProgress && (
        <Link to={`/${foodType}/${food[`id${key}`]}/in-progress`}>
          <Button data-testid="start-recipe-btn">Start Recipe</Button>
        </Link>
      )}
      {inProgress && (
        <Link to="/receitas-feitas">
          <Button data-testid="finish-recipe-btn">Finish Recipe</Button>
        </Link>
      )}
    </div>
  );
};

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number }),
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeDetails;
