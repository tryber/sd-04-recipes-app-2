import React from 'react';

const FavoriteButton = (props) => {
  const { addToFavoriteRecipes, setIsFavorite } = props;
  return (
    <button
      data-testid="favorite-btn"
      type="button"
      src={isFavorite ? blackHeart : whiteHeart}
      onClick={() => {
        addToFavoriteRecipes(food, isFavorite);
        setIsFavorite(!isFavorite);
      }}
    >
      <img src={isFavorite ? blackHeart : whiteHeart} alt={`isFavorite? ${isFavorite}`} />
    </button>
  );
};

export default FavoriteButton;
