import { useState, useEffect } from 'react';
import { getFoodById } from '../services/api';

const useFoodDetails = (type, id) => {
  const [meal, setMeal] = useState({});
  const [mealValue, setMealValue] = useState({});
  const [drink, setDrink] = useState({});
  const [drinkValue, setDrinkValue] = useState({});
  const [isInProgress, setIsInProgress] = useState(false);
  const [loading, setLoading] = useState(true);

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

  return { loading, mealValue, drinkValue, isInProgress };
};

export default useFoodDetails;
