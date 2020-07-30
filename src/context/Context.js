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
    return callback(response);
  };

  const handleFailure = (error) => {
    return console.error(error.message);
  };

  const getApi = async (URL, callback) => {
    if (loading) return null;
    setLoading(true);
    return fetchApi(URL).then((response) => handleSuccess(response, callback), handleFailure);
  };

  const getRandomMeals = async () => {
    const newMeals = [];
    for (let i = 0; i < 12; i += 1) {
      getApi(randomMealURL, async (meal) => {
        newMeals.push(...meal);
        if (i === 11) {
          setMeals([...newMeals]);
          setLoading(false);
        }
      });
    }
  };

  useEffect(async () => {
    setLoading(true);
    await getApi(categoriesURL, setCategories);
    await getApi(areasURL, setAreas);
    await getApi(ingredientsURL, setIngredients);
    await getRandomMeals();
  }, []);

  const contextValue = { loading, categories, areas, ingredients, meals };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
