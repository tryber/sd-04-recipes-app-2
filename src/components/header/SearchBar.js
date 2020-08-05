import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Context } from '../../context/Context';
import { getFoodsByIndredient, getFoodsByName, getFoodsByFirstLetter } from '../../services/api';

const handler = (event, setFunt) => {
  setFunt(event.target.value);
};

const checkLength = (type, arr, setRedirect, foodType) => {
  if (arr.length === 1) {
    setRedirect({
      shouldRedirect: true,
      type: foodType.toLowerCase(),
      id:
        arr[0][
          `id${type
            .split('')
            .map((char, i) => (i === 0 ? char.toUpperCase() : char))
            .join('')}`
        ],
    });
  }
};

const filterFoods = (foodType, input, option, setFunc, setRedirect) => {
  let type = 'cocktail';
  if (foodType === 'Comidas') {
    type = 'meal';
  }
  switch (option) {
    case 'ingredient':
      getFoodsByIndredient(type, input).then((resp) => {
        checkLength(type, resp, setRedirect, foodType);
        setFunc(resp);
      });
      break;
    case 'name':
      getFoodsByName(type, input).then((resp) => {
        checkLength(type, resp, setRedirect, foodType);
        setFunc(resp);
      });
      break;
    case 'first-letter':
      if (input.length === 1) {
        getFoodsByFirstLetter(type, input).then((resp) => {
          checkLength(type, resp, setRedirect, foodType);
          setFunc(resp);
        });
      } else {
        alert('Sua busca deve conter somente 1 (um) caracter');
      }
      break;
    default:
  }
};

const SearchBar = ({ foodType }) => {
  const [redirect, setShoudlRedirect] = useState({ shouldRedirect: false, type: '', id: '' });
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
  if (redirect.shouldRedirect) return <Redirect to={`/${redirect.type}/${redirect.id}`} />;
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
            filterFoods(foodType, inputText, selectedOption, setMeals, setShoudlRedirect);
          } else {
            filterFoods(foodType, inputText, selectedOption, setDrinks, setShoudlRedirect);
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
