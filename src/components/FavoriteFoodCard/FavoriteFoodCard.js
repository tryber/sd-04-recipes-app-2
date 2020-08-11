import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareBtn from '../../images/shareIcon.svg';
import FavoriteBtn from '../../images/blackHeartIcon.svg';

const FavoriteFoodCard = ({
  recipe: { id, type, area, category, alcoholicOrNot, name, image },
  index,
  removeFromFavorite,
}) => {
  const copyToClipboard = (foodType, foodId) => {
    const url = `${window.location.origin}/${foodType}/${foodId}`;
    navigator.clipboard.writeText(url);
    alert('Link copiado!');
  };

  const isMeal = type === 'comidas';

  return (
    <div>
      <Link to={`/${type}/${id}`}>
        <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
      </Link>
      {isMeal && <p data-testid={`${index}-horizontal-top-text`}>{`${area} - ${category}`}</p>}
      {!isMeal && <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>}
      <Link to={`/${type}/${id}`}>
        <p data-testid={`${index}-horizontal-name`}>{name}</p>
      </Link>
      <button type="button" onClick={() => copyToClipboard(type, id)}>
        <img data-testid={`${index}-horizontal-share-btn`} src={ShareBtn} alt="share-btn" />
      </button>
      <button type="button" onClick={() => removeFromFavorite(type, id)}>
        <img data-testid={`${index}-horizontal-favorite-btn`} src={FavoriteBtn} alt="share-btn" />
      </button>
    </div>
  );
};

export default FavoriteFoodCard;

FavoriteFoodCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.string.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};
