import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { PKXView } from "./views/pkx";
import { CollectionView } from "./views/collection";
import { CollectionListView } from "./views/collection-list";
import { GET_USER_INFO } from "./graphql/queries/user";

export const Routes = () => {
  const { data = { user: {} } } = useQuery(GET_USER_INFO);
  const isLoggedIn = data.user.id !== undefined;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pkx/:userId/:pkxId" component={PKXView} />
        <Route
          path="/collection/:userId/:collectionName"
          component={CollectionView}
        />
        <Route path="/collection/:userId" component={CollectionListView} />
        {isLoggedIn && <Redirect from="/" to={`/collection/${data.user.id}`} />}
      </Switch>
    </BrowserRouter>
  );
};
