const addToInProgressRecipes = (foodItem, isInProgress) => {
  console.log(foodItem);
  if (isInProgress) return null;
  if (foodItem.key === 'Meal') {
    const mealsInProgress = JSON.parse(localStorage.inProgressRecipes);
    console.log('isMeal');
    localStorage.inProgressRecipes = JSON.stringify({
      ...JSON.parse(localStorage.inProgressRecipes),
      meals: {
        ...mealsInProgress.meals,
        [foodItem.item.idMeal]: Object.keys(foodItem.item)
          .filter((item) => item.includes('strIngredient') && foodItem.item[item])
          .map((ingredient) => foodItem.item[ingredient]),
      },
    });
  } else {
    localStorage.inProgressRecipes = JSON.stringify({
      ...localStorage.inProgressRecipes,
      cocktails: {
        ...localStorage.inProgressRecipes.cocktails,
        [foodItem.item.idDrink]: [foodItem.item],
      },
    });
  }
  return foodItem.item;
};

export default addToInProgressRecipes;
