import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, MainPage, RecipeDetails } from './pages';
import { BottomMenu } from './components';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/comidas">
        <MainPage foodType="comidas" />
      </Route>
      <Route exact path="/bebidas">
        <MainPage foodType="bebidas" />
      </Route>
      <Route path="/comidas/:id" component={RecipeDetails} />
      <Route path="/bebidas/:id" component={RecipeDetails} />
      {/*
        <Route exact path="/comidas/:id/in-progress" component={} />
        <Route exact path="/bebidas/:id/in-progress" component={} />
      */}
      <Route exact path="/explorar" component={BottomMenu} />
      {/*
        <Route exact path="/explorar/comidas" component={} />
        <Route exact path="/explorar/bebidas" component={} />
        <Route exact path="/explorar/comidas/ingredientes" component={} />
        <Route exact path="/explorar/bebidas/ingredientes" component={} />
        <Route exact path="/explorar/comidas/area" component={} />
        <Route exact path="/perfil" component={} />
        <Route exact path="/receitas-feitas" component={} />
        <Route exact path="/receitas-favoritas" component={} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
