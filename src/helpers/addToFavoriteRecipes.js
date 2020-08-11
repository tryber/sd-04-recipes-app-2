const addToFavoriteRecipes = (food, isFavorite) => {
  if (isFavorite) return null;
  const { key, type, item } = food;
  const favoriteRecipe = {
    id: item[`id${key}`],
    type,
    area: item.strArea,
    category: item.strCategory,
    alcoholicOrNot: item.strAlcoholic,
    name: item[`str${key}`],
    image: item[`str${key}Thumb`],
  };
  console.log(favoriteRecipe);
  localStorage.favoriteRecipes = JSON.stringify([
    ...JSON.parse(localStorage.favoriteRecipes),
    favoriteRecipe,
  ]);
  return favoriteRecipe;
};

export default addToFavoriteRecipes;
