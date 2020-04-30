import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PokemonView } from './views/pokemon';
import { CollectionView } from './views/collection';
import { CollectionListView } from './views/collection-list';

export const createPokemonRoute = (userId, collectionId, pokemonId) =>
  `/user/${userId}/${collectionId}/${pokemonId}`;
export const createCollectionRoute = (userId, collectionId) =>
  `/user/${userId}/${collectionId}`;
export const createCollectionListRoute = (userId) => `/user/${userId}`;

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
