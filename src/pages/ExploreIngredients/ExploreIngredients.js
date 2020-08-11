import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BottomMenu, Header, Loading } from '../../components';
import { getIngredientsList, URLIngredientsImg } from '../../services/api';

const ExploreIngredients = ({ match: { path } }) => {
  const [loading, setLoading] = useState(true);
  const [ingredientsName, setIngredientsName] = useState([]);
  const page = path.includes('comidas');
  const pathIngredient = page ? 'comidas' : 'bebidas';
  const type = page ? 'meal' : 'cocktail';
  const ingredientNameKey = page ? 'strIngredient' : 'strIngredient1';

  useEffect(() => {
    getIngredientsList(type).then((resp) => {
      setIngredientsName(resp.slice(0, 12));
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;
  console.log('ingredientsName: ', ingredientsName);
  console.log('ingredientsName: ', ingredientsName[0][ingredientNameKey]);
  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" />
      {ingredientsName.map((index) => (
        <Link to={`/${pathIngredient}`} key={index[ingredientNameKey]}>
          {console.log(index)}
          <img
            data-testid={`${index}-ingredient-card`}
            src={URLIngredientsImg(type, index[ingredientNameKey])}
            alt={`${index[ingredientNameKey]}`}
          />
          <p data-testid={`${index}-card-name`}>{index[ingredientNameKey]}</p>
        </Link>
      ))}
      <BottomMenu />
    </div>
  );
};

export default ExploreIngredients;
