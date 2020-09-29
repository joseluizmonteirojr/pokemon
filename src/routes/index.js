import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PokemonDetail from '../pages/pokemon-detail';
import PokemonList from '../pages/pokemon-list';

const Routes = () => (
  <Switch>
    <Route path="/" component={PokemonList} exact />
    <Route path="/pokemon-detail/:pokemonId" component={PokemonDetail} />
  </Switch>
);

export default Routes;
