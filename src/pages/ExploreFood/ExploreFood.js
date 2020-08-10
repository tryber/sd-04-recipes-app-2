import React from 'react';
import { Link } from 'react-router-dom';
import { BottomMenu, Header } from '../../components';

const ExploreFood = ({ match: { path } }) => {
  const page = path.includes('comidas');
  const pathFood = page ? 'comidas' : 'bebidas';
  const type = page ? 'meal' : 'cocktail';
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
      <Link to={`/${pathFood}/:id`} data-testid="explore-surprise">
        Me Surpreenda!
      </Link>
      <BottomMenu />
    </div>
  );
};

export default ExploreFood;
