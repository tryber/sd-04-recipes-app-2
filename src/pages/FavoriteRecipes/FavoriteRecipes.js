import React, { useState } from 'react';
import { Header, FilterButtons, FavoriteFoodCard } from '../../components';

const FavoriteRecipes = () => {
  const initialFavoriteRecipes = JSON.parse(localStorage.favoriteRecipes);
  const [favoriteRecipes, setFavoriteRecipes] = useState(initialFavoriteRecipes);

  const removeFromFavorite = (foodType, foodId) => {
    const newFavList = initialFavoriteRecipes.filter(
      (recipe) => recipe.id !== foodId && recipe.type === foodType,
    );
    // setFavoriteRecipes(newFavList);
    localStorage.favoriteRecipes = newFavList;
  };

  return (
    <div>
      <Header pageTitle="Receitas Favoritas" />
      <FilterButtons
        initialRecipes={initialFavoriteRecipes}
        recipes={favoriteRecipes}
        setFunc={setFavoriteRecipes}
      />

      <div>
        {favoriteRecipes.map((recipe, index) => (
          <FavoriteFoodCard recipe={recipe} index={index} removeFromFavorite={removeFromFavorite} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteRecipes;
