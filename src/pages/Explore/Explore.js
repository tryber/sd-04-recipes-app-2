import React from 'react';
import { Link } from 'react-router-dom';
import { BottomMenu, Header } from '../../components';

const Explore = () => (
  <div>
    <Header pageTitle="Explorar" />
    <Link to="/explorar/comidas" data-testid="explore-food">
      Explorar Comidas
    </Link>
    <Link to="/explorar/bebidas" data-testid="explore-drinks">
      Explorar Bebidas
    </Link>
    <BottomMenu />
  </div>
);

export default Explore;
