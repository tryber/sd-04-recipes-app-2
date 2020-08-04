import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RecipeCard = styled.div`
  width: 40vw
`;

const FoodCard = ({ index, thumb, str }) => (
  <RecipeCard data-testid={`${index}-recipe-card`}>
    <img data-testid={`${index}-card-img`} src={thumb} alt={str} />
    <p data-testid={`${index}-card-name`}>{str}</p>
  </RecipeCard>
);

export default FoodCard;

FoodCard.propTypes = {
  thumb: PropTypes.string.isRequired,
  str: PropTypes.string.isRequired,
};
