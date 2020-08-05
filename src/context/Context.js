import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchApi, categoriesURL, areasURL, ingredientsURL, randomMealURL } from '../services/api';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [meals, setMeals] = useState([]);

  const handleSuccess = (response, callback) => callback(response);

  const handleFailure = (error) => console.error(error.message);

  const getApi = async (URL, callback) => {
    if (loading) return null;
    setLoading(true);
    return fetchApi(URL).then((response) => handleSuccess(response, callback), handleFailure);
  };

  const getRandomMeals = () => {
    const newMeals = [];
    for (let i = 0; i < 12; i += 1) {
      getApi(randomMealURL, (meal) => {
        newMeals.push(...meal);
        if (i === 11) {
          setLoading(false);
          setMeals([...newMeals]);
        }
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    getApi(categoriesURL, setCategories);
    getApi(areasURL, setAreas);
    getApi(ingredientsURL, setIngredients);
    getRandomMeals();
  }, []);

  const contextValue = { loading, categories, areas, ingredients, meals, setMeals };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
