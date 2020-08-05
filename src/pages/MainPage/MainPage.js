import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Context } from '../../context/Context';
import { Header, FoodCard, BottomMenu } from '../../components';

const FoodsContainer = styled.div`
  width: 100vw;
  padding: 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const MainPage = ({ foodType }) => {
  const { loading, categories, /* areas, ingredients, */ meals, drinks } = useContext(Context);

  if (loading) return <p>Loading...</p>;
  const mealValues = { list: [...meals], key: 'Meal', title: 'Comidas' };
  const drinkValues = { list: [...drinks], key: 'Drink', title: 'Bebidas' };
  const foods = foodType === 'comidas' ? mealValues : drinkValues;

  return (
    <div>
      <Header pageTitle={foods.title} />
      {categories.map(({ strCategory }) => (
        <button type="button">{strCategory}</button>
      ))}
      <FoodsContainer>
        {foods.list.slice(0, 12).map((food, index) => (
          <FoodCard
            key={`${foods[`id${foods.Key}`]} ${foods[`str${foods.Key}`]}`}
            thumb={food[`str${foods.key}Thumb`]}
            str={food[`str${foods.key}`]}
            index={index}
            id={food[`id${foods.Key}`]}
          />
        ))}
      </FoodsContainer>
      <BottomMenu />
    </div>
  );
};

export default MainPage;

MainPage.propTypes = {
  foodType: PropTypes.string.isRequired,
};
