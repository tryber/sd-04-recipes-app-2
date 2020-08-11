import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecipeCard = styled.div`
  width: 200px;
`;

const FoodCard = ({ index, thumb, str, id, foodType }) => (
  <RecipeCard data-testid={`${index}-recipe-card`}>
    {/* Retirar o 'style in line' da tag img, e fazer o css para ela. */}
    <Link to={`/${foodType}/${id}`}>
      <img
        data-testid={`${index}-card-img`}
        src={thumb}
        alt={str}
        style={{ width: '200px', borderRadius: '50%' }}
      />
      <p data-testid={`${index}-card-name`}>{str}</p>
    </Link>
  </RecipeCard>
);

export default FoodCard;

FoodCard.propTypes = {
  thumb: PropTypes.string.isRequired,
  str: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  foodType: PropTypes.string.isRequired,
};
