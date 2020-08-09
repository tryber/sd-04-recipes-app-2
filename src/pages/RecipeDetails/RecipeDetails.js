import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Loading,
  Ingredients,
  Instructions,
  Video,
  Recomendations,
  Category,
} from '../../components';
import Button from '../../styledComponents/Button/styles';
import { getFoodById } from '../../services/api';

const RecipeDetails = ({
  match: {
    params: { id },
    path,
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState({});
  const [drink, setDrink] = useState({});
  const [mealValue, setMealValue] = useState({});
  const [drinkValue, setDrinkValue] = useState({});

  const type = path.includes('comidas') ? 'meal' : 'cocktail';
  const food = path.includes('comidas') ? mealValue : drinkValue;
  const inProgress = path.includes('in-progress');

  useEffect(() => {
    getFoodById(type, id).then((resp) => {
      if (type === 'meal') {
        setMeal(resp[0]);
      }
      setDrink(resp[0]);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setMealValue({ item: meal, key: 'Meal', path: 'comidas' });
    setDrinkValue({ item: drink, key: 'Drink', path: 'bebidas' });
  }, [meal, drink]);

  if (loading) return <Loading />;

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={food.item[`str${food.key}Thumb`]}
        alt={food[`str${food.key}`]}
      />
      <h1 data-testid="recipe-title">{food.item[`str${food.key}`]}</h1>
      <Category food={food.item} type={type} />
      <button type="button" data-testid="share-btn">
        Icone twitter
      </button>
      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>
      <Ingredients food={food.item} path={path} />
      <Instructions instructions={food.item.strInstructions} />
      {!inProgress && (
        <div>
          {food.item.strYoutube && <Video path={path} food={food.item} />}
          <Recomendations type={type} />
          <Link to={`/${food.path}/${food.item[`id${food.key}`]}/in-progress`}>
            <Button data-testid="start-recipe-btn">Start Recipe</Button>
          </Link>
        </div>
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
