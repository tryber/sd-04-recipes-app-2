import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/Context';
import { Header, FoodCard } from '../../components';

const FoodsContainer = styled.div`
  width: 100vw;
  padding: 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const MainPage = () => {
  const { loading, categories, /* areas, ingredients, */ meals } = useContext(Context);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Header pageTitle="Comidas" />
      {categories.map(({ strCategory }) => (
        <button>{strCategory}</button>
      ))}
      <FoodsContainer>
        {meals.map(({ idMeal, strMealThumb, strMeal }, index) => (
          <FoodCard
            key={`${idMeal} ${strMeal}`}
            thumb={strMealThumb}
            str={strMeal}
            index={index}
            id={idMeal}
          />
        ))}
      </FoodsContainer>
    </div>
  );
};

export default MainPage;
