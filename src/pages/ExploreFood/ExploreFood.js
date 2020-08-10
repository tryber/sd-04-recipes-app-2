import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BottomMenu, Header, Loading } from '../../components';
import { getFoodByRandom } from '../../services/api';

const ExploreFood = ({ match: { path } }) => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = path.includes('comidas');
  const pathFood = page ? 'comidas' : 'bebidas';
  const type = page ? 'meal' : 'cocktail';
  const key = page ? 'Meal' : 'Drink';

  useEffect(() => {
    getFoodByRandom(type).then((resp) => {
      setFood(resp[0]);
      setLoading(false);
    });
  }, []);

  console.log(food);
  if(loading) return <Loading />
  return (
    <div>
      <Header pageTitle="Explorar" />
      <Link to={`/explorar/${pathFood}/ingredientes`} data-testid="explore-by-ingredient">
        Por Ingredientes
      </Link>
      {page && (
        <Link to="/explorar/comidas/area" data-testid="explore-by-area">
          Por Local de Origem
        </Link>
      )}
      <Link to={`/${pathFood}/${food[`id${key}`]}`} data-testid="explore-surprise">
        Me Surpreenda!
      </Link>
      <BottomMenu />
    </div>
  );
};

export default ExploreFood;
