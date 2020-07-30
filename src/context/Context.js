import React, { createContext, useEffect, useState } from 'react';
import fetchApi, { categoriesURL, areasURL, ingredientsURL, randomMealURL } from '../services/api';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [meals, setMeals] = useState([]);

  const handleSuccess = (response, callback) => {
    setLoading(false);
    return callback(response);
  };

  const handleFailure = (error) => {
    setLoading(false);
    return console.error(error.message);
  };

  const getApi = async (URL, callback) => {
    if (loading) return null;
    setLoading(true);
    return fetchApi(URL).then((response) => handleSuccess(response, callback), handleFailure);
  };

  const getRandomMeals = async () => {
    const spreadMeals = [...meals];
    for (let i = 0; i < 12; i += 1) {
      getApi(randomMealURL, (meal) => {
        const mealObj = meal[0];
        const newMeals = spreadMeals.push(mealObj);
        console.log(newMeals);
      });
    }
  };

  useEffect(() => {
    getApi(categoriesURL, setCategories);
    getApi(areasURL, setAreas);
    getApi(ingredientsURL, setIngredients);
    getRandomMeals();
  }, []);

  const contextValue = { loading, categories, areas, ingredients };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
