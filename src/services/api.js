export const categoriesURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const areasURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
export const ingredientsURL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
export const randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const fetchApi = async (URL) =>
  fetch(URL)
    .then((response) => response.json())
    .then((responseJSON) => responseJSON.meals);

export default fetchApi;
