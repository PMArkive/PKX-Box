import React from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { PokemonView } from './views/pokemon';
import { CollectionView } from './views/collection';
import { CollectionListView } from './views/collection-list';
import {
  createPokemonRoute,
  createCollectionRoute,
  createCollectionListRoute,
} from './utils/routes';
import ReactGA from 'react-ga';

const TrackedRoute = (props) => {
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);

  return <Route {...props} />;
};

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <TrackedRoute
          path={createPokemonRoute(':userId', ':collectionId', ':pokemonId')}
          component={PokemonView}
        />
        <TrackedRoute
          path={createCollectionRoute(':userId', ':collectionId')}
          component={CollectionView}
        />
        <TrackedRoute
          path={createCollectionListRoute(':userId')}
          component={CollectionListView}
        />
        <TrackedRoute path="/" component={CollectionListView} />
      </Switch>
    </BrowserRouter>
  );
};
