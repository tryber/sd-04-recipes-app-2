import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/Context';
import { getFoodsByIndredient, getFoodsByName, getFoodsByFirstLetter } from '../../services/api';

const handler = (event, setFunt) => {
  setFunt(event.target.value);
};

const filterFoods = (foodType, input, option, setFunc) => {
  let type = 'cocktail';
  if (foodType === 'Comidas') {
    type = 'meal';
  }

  switch (option) {
    case 'ingredient':
      getFoodsByIndredient(type, input).then(setFunc);
      break;
    case 'name':
      getFoodsByName(type, input).then(setFunc);
      break;
    case 'first-letter':
      getFoodsByFirstLetter(type, input).then(setFunc);
      break;
    default:
  }
};

const SearchBar = ({ foodType }) => {
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const { setMeals, setDrinks } = useContext(Context);

  const createInputRadio = (value, testid, name) => (
    <label htmlFor={value}>
      <input
        value={value}
        type="radio"
        data-testid={testid}
        id={value}
        checked={selectedOption === `${value}`}
        onChange={(event) => handler(event, setSelectedOption)}
      />
      {name}
    </label>
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipe"
        data-testid="search-input"
        onChange={(event) => handler(event, setInputText)}
      />
      {createInputRadio('ingredient', 'ingredient-search-radio', 'Ingredient')}
      {createInputRadio('name', 'name-search-radio', 'Name')}
      {createInputRadio('first-letter', 'first-letter-search-radio', 'First letter')}
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={() => {
          if (foodType === 'Comidas') {
            filterFoods(foodType, inputText, selectedOption, setMeals);
          } else {
            filterFoods(foodType, inputText, selectedOption, setDrinks);
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  foodType: PropTypes.string.isRequired,
};
