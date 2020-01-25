import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { toIdValue } from "apollo-utilities";

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      pkx: (parent, args) =>
        toIdValue(
          cache.config.dataIdFromObject({
            __typename: "PKXDocument",
            id: args.pkxId
          })
        )
    }
  }
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: process.env.REACT_APP_API,
      credentials: "same-origin"
    })
  ]),
  cache
});
