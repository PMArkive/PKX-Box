import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PokemonView } from './views/pokemon';
import { CollectionView } from './views/collection';
import { CollectionListView } from './views/collection-list';
import {
  createPokemonRoute,
  createCollectionRoute,
  createCollectionListRoute,
} from './utils/routes';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={createPokemonRoute(':userId', ':collectionId', ':pokemonId')}
          component={PokemonView}
        />
        <Route
          path={createCollectionRoute(':userId', ':collectionId')}
          component={CollectionView}
        />
        <Route
          path={createCollectionListRoute(':userId')}
          component={CollectionListView}
        />
        <Route path="/" component={CollectionListView} />
      </Switch>
    </BrowserRouter>
  );
};
