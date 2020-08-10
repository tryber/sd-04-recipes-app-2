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
  const [isInProgress, setIsInProgress] = useState(false);
  const type = path.includes('comidas') ? 'meal' : 'cocktail';
  const food = path.includes('comidas') ? mealValue : drinkValue;
  const inProgress = path.includes('in-progress');

  useEffect(() => {
    getFoodById(type, id).then((resp) => {
      let key = 'Meal';
      if (type === 'meal') {
        setMeal(resp[0]);
      } else {
        key = 'Drink';
        setDrink(resp[0]);
      }
      setLoading(false);
      if (localStorage.inProgressRecipes) {
        const foodsInProgress = JSON.parse(localStorage.inProgressRecipes);
        console.log(foodsInProgress.meals);
        const foodIsInProgress = Object.keys(foodsInProgress.meals).includes(resp[0][`id${key}`]);
        setIsInProgress(foodIsInProgress);
      } else {
        localStorage.inProgressRecipes = JSON.stringify({ cocktails: {}, meals: {} });
      }
    });
  }, []);

  useEffect(() => {
    setMealValue({ item: meal, key: 'Meal', path: 'comidas', type: 'comida' });
    setDrinkValue({ item: drink, key: 'Drink', path: 'bebidas', type: 'bebida' });
  }, [meal, drink]);

  const addToInProgressRecipes = (foodItem) => {
    console.log(foodItem);
    if (isInProgress) return null;
    if (foodItem.key === 'Meal') {
      const mealsInProgress = JSON.parse(localStorage.inProgressRecipes);
      console.log('isMeal');
      localStorage.inProgressRecipes = JSON.stringify({
        ...JSON.parse(localStorage.inProgressRecipes),
        meals: {
          ...mealsInProgress.meals,
          [foodItem.item.idMeal]: Object.keys(foodItem.item)
            .filter((item) => item.includes('strIngredient') && foodItem.item[item])
            .map((ingredient) => foodItem.item[ingredient]),
        },
      });
    } else {
      localStorage.inProgressRecipes = JSON.stringify({
        ...localStorage.inProgressRecipes,
        cocktails: {
          ...localStorage.inProgressRecipes.cocktails,
          [foodItem.item.idDrink]: [foodItem.item],
        },
      });
    }
    return foodItem.item;
  };

  if (loading) return <Loading />;

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={food.item[`str${food.key}Thumb`]}
        alt={food[`str${food.key}`]}
        style={{ width: '30vw' }}
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
            <Button.fixed
              data-testid="start-recipe-btn"
              onClick={() => addToInProgressRecipes(food)}
            >
              {isInProgress ? 'Continuar Receita' : 'Iniciar Receita'}
            </Button.fixed>
          </Link>
        </div>
      )}
      {inProgress && (
        <Link to="/receitas-feitas">
          <Button.fixed data-testid="finish-recipe-btn">Finish Recipe</Button.fixed>
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
