import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareBtn from '../../images/shareIcon.svg';

const DoneFoodCard = ({
  recipe: { id, type, area, category, alcoholicOrNot, name, image, doneDate, tags },
  index,
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
      <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
      {isMeal &&
        tags
          .slice(0, 2)
          .map((tagName) => <p data-testid={`${index}-${tagName}-horizontal-tag`}>{tagName}</p>)}
    </div>
  );
};

export default DoneFoodCard;

DoneFoodCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.string.isRequired,
};
