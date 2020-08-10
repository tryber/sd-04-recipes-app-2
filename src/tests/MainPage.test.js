import React from 'react';
import { waitForDomChange, cleanup } from '@testing-library/react';
import renderWithRouterAndContext from './renderWithRouterAndContext';
import { MainPage } from '../pages';
import meals from '../../cypress/mocks/meals';
import beefMeals from '../../cypress/mocks/beefMeals';
import breakfastMeals from '../../cypress/mocks/breakfastMeals';
import chickenMeals from '../../cypress/mocks/chickenMeals';
import dessertMeals from '../../cypress/mocks/dessertMeals';
import goatMeals from '../../cypress/mocks/goatMeals';
import mealCategories from '../../cypress/mocks/mealCategories';
import drinkCategories from '../../cypress/mocks/drinkCategories';

beforeEach(() => {
  cleanup();
});

describe('Starts with loading', () => {
  test('Loading...', () => {
    const { getByText } = renderWithRouterAndContext(<MainPage />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
  test('When loaded, remove Loading...', async () => {
    const { queryByText } = renderWithRouterAndContext(<MainPage />);
    await waitForDomChange();
    expect(queryByText('Loading...')).toBeNull();
  });
});

describe('Have the categories buttons', () => {
  test('Have the All categories button', async () => {
    const { getByTestId } = renderWithRouterAndContext(<MainPage />);
    await waitForDomChange();
    expect(getByTestId('All-category-filter')).toBeInTheDocument();
  });
  test('Have 5 categories buttons', async () => {
    const { getByTestId } = renderWithRouterAndContext(<MainPage />);
    await waitForDomChange();
    drinkCategories.drinks.slice(0, 5).forEach(({ strCategory }) => {
      expect(getByTestId(`${strCategory}-category-filter`)).toBeInTheDocument();
    });
  });
});
