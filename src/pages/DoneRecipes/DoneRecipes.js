import React, { useState } from 'react';
import { Header, FilterButtons, DoneFoodCard } from '../../components';

const DoneRecipes = () => {
  const initialDoneRecipes = JSON.parse(localStorage.doneRecipes);
  const [doneRecipes, setDoneRecipes] = useState(initialDoneRecipes);

  return (
    <div>
      <Header pageTitle="Receitas Feitas" />
      <FilterButtons
        initialRecipes={initialDoneRecipes}
        recipes={doneRecipes}
        setFunc={setDoneRecipes}
      />
      <div>
        {doneRecipes.map((recipe, index) => (
          <DoneFoodCard recipe={recipe} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DoneRecipes;
