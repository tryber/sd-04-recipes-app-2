import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import FoodCard from '../../components/foodCard/FoodCard';
import styled from 'styled-components';

const FoodsContainer = styled.div`
  width: 100vw;
  padding: 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const MainPage = () => {
  const { loading, categories, /* areas, ingredients, */ meals } = useContext(Context);
  console.log(categories);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
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
