export const categoriesURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const areasURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
export const ingredientsURL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
export const randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const mealByIdURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const fetchApi = async (URL) =>
  fetch(URL)
    .then((response) => response.json())
    .then((responseJSON) => responseJSON.meals);

const getMealById = (id) => fetchApi(`${mealByIdURL}${id}`);

export { fetchApi, getMealById };
