import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  fetchApi,
  categoriesURL,
  areasURL,
  ingredientsURL,
  initialMealsURL,
  initialDrinksURL,
  // randomMealURL,
} from '../services/api';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const handleSuccess = (response, callback) => callback(response);

  const handleFailure = (error) => console.error(error.message);

  const getApi = async (URL, callback) => {
    if (loading) return null;
    setLoading(true);
    return fetchApi(URL).then((response) => handleSuccess(response, callback), handleFailure);
  };

  // const getRandomMeals = () => {
  //   const newMeals = [];
  //   for (let i = 0; i < 12; i += 1) {
  //     getApi(randomMealURL, (meal) => {
  //       newMeals.push(...meal);
  //       if (i === 11) {
  //         setLoading(false);
  //         setMeals([...newMeals]);
  //       }
  //     });
  //   }
  // };

  const getAllApis = async () => {
    await getApi(categoriesURL, setCategories);
    await getApi(areasURL, setAreas);
    await getApi(ingredientsURL, setIngredients);
    // await getRandomMeals();
    await getApi(initialMealsURL, setMeals);
    await getApi(initialDrinksURL, setDrinks);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getAllApis();
  }, []);

  const contextValue = { loading, categories, areas, ingredients, meals, setMeals, drinks, setDrinks };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
