import React, { useState } from 'react';
import { Header, DoneFoodCard } from '../../components';

const DoneRecipes = () => {
  const filterButtons = ['All', 'Food', 'Drinks'];
  const initialDoneRecipes = JSON.parse(localStorage.doneRecipes);
  const [doneRecipes, setDoneRecipes] = useState(initialDoneRecipes);

  const filterByCategory = (category) => {
    switch (category) {
      case 'All':
        setDoneRecipes(initialDoneRecipes);
        break;
      case 'Food':
        setDoneRecipes(doneRecipes.filter((recipe) => recipe.alcoholicOrNot.length < 1));
        break;
      case 'Drink':
        setDoneRecipes(doneRecipes.filter((recipe) => recipe.alcoholicOrNot.length > 1));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header pageTitle="Receitas Feitas" />
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
      <div>
        {doneRecipes.map((recipe, index) => (
          <DoneFoodCard recipe={recipe} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DoneRecipes;
