const addToFavoriteRecipes = (food, isFavorite) => {
  const { key, type, item } = food;

  if (isFavorite) {
    localStorage.favoriteRecipes = JSON.stringify([
      ...JSON.parse(localStorage.favoriteRecipes).filter(({ id }) => id !== item[`id${key}`]),
    ]);
    return JSON.parse(localStorage.favoriteRecipe);
  }

  const favoriteRecipe = {
    id: item[`id${key}`],
    type,
    area: item.strArea,
    category: item.strCategory,
    alcoholicOrNot: item.strAlcoholic || '',
    name: item[`str${key}`],
    image: item[`str${key}Thumb`],
  };

  localStorage.favoriteRecipes = JSON.stringify([
    ...JSON.parse(localStorage.favoriteRecipes),
    favoriteRecipe,
  ]);

  return JSON.parse(localStorage.favoriteRecipe);
};

export default addToFavoriteRecipes;
