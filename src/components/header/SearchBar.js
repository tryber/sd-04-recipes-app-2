import React, { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import { getMealsByIndredient, getMealsByName, getMealsByFirstLetter } from '../../services/api';

const SearchBar = () => {
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const { setMeals } = useContext(Context);

  const filterMeals = (input, option) => {
    switch (option) {
      case 'ingredient':
        getMealsByIndredient(input).then(setMeals);
        break;
      case 'name':
        getMealsByName(input).then(setMeals);
        break;
      case 'first-letter':
        getMealsByFirstLetter(input).then(setMeals);
        break;
      default:
    }
  };

  const handler = (event, setFunt) => {
    setFunt(event.target.value);
  };

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
        onClick={() => filterMeals(inputText, selectedOption)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
