import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, FilterButtons, FoodInfoCard } from '../../components';

const FavoriteRecipes = ({ match: { path } }) => {
  const initialFavoriteRecipes = JSON.parse(localStorage.favoriteRecipes);
  const [favoriteRecipes, setFavoriteRecipes] = useState(initialFavoriteRecipes);

  const removeFromFavorite = (foodType, foodId) => {
    const newFavList = initialFavoriteRecipes.filter(
      (recipe) => recipe.id !== foodId && recipe.type === foodType,
    );
    setFavoriteRecipes(newFavList);
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
          <FoodInfoCard
            recipe={recipe}
            index={index}
            path={path}
            removeFromFavorite={removeFromFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteRecipes;

FavoriteRecipes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
