import { useState, useEffect } from 'react';
import { getFoodById } from '../services/api';

const useFoodDetails = (path, id) => {
  const [meal, setMeal] = useState({});
  const [mealValue, setMealValue] = useState({});
  const [drink, setDrink] = useState({});
  const [drinkValue, setDrinkValue] = useState({});
  const [isInProgress, setIsInProgress] = useState(false);
  const [loading, setLoading] = useState(true);

  const type = path.includes('comidas') ? 'meal' : 'cocktail';
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
        const foodIsInProgress = Object.keys(
          JSON.parse(localStorage.inProgressRecipes)[`${type}s`],
        ).includes(resp[0][`id${key}`]);
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

  const food = path.includes('comidas') ? mealValue : drinkValue;

  return { loading, food, isInProgress, inProgress, type };
};

export default useFoodDetails;
