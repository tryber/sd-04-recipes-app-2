export const categoriesURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const areasURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
export const ingredientsURL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
export const randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const initialMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const initialDrinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const mealByIdURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const fetchApi = async (URL) => {
  const responseKey = /meal/.test(URL) ? 'meals' : 'drinks';
  return fetch(URL)
    .then((response) => response.json())
    .then((responseJSON) => responseJSON[responseKey]);
};

const getMealById = (id) => fetchApi(`${mealByIdURL}${id}`);

const getFoodsByIndredient = (type, ingredient) =>
  fetchApi(`https://www.the${type}db.com/api/json/v1/1/filter.php?i=${ingredient}`);

const getFoodsByName = (type, name) =>
  fetchApi(`https://www.the${type}db.com/api/json/v1/1/search.php?s=${name}`);

const getFoodsByFirstLetter = (type, firstLetter) =>
  fetchApi(`https://www.the${type}db.com/api/json/v1/1/search.php?f=${firstLetter}`);

export { fetchApi, getMealById, getFoodsByIndredient, getFoodsByName, getFoodsByFirstLetter };
