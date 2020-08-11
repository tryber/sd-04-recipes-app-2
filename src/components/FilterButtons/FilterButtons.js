import React from 'react';
import PropTypes from 'prop-types';

const FilterButtons = ({ initialRecipes, recipes, setFunc }) => {
  const filterButtons = ['All', 'Food', 'Drinks'];

  const filterByCategory = (category) => {
    switch (category) {
      case 'All':
        setFunc(initialRecipes);
        break;
      case 'Food':
        setFunc(recipes.filter((recipe) => recipe.type === 'comida'));
        break;
      case 'Drink':
        setFunc(recipes.filter((recipe) => recipe.type === 'bebida'));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {filterButtons.map((btn) => (
        <button
          data-testid={`filter-by-${btn.toLowerCase()}-btn`}
          type="button"
          key={btn}
          onClick={() => filterByCategory(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;

FilterButtons.propTypes = {
  initialRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFunc: PropTypes.func.isRequired,
};
