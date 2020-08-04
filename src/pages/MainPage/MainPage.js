import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import FoodCard from '../../components/foodCard/FoodCard';

const MainPage = () => {
  const { loading, categories, /* areas, ingredients, */ meals } = useContext(Context);
  console.log(categories);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {categories.map(({ strCategory }) => (
        <button>{strCategory}</button>
      ))}

      {meals.map(({ idMeal, strMealThumb, strMeal }) => (
        <FoodCard key={`${idMeal} ${strMeal}`} thumb={strMealThumb} str={strMeal} />
      ))}
    </div>
  );
};

export default MainPage;
