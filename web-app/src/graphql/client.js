import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { toIdValue } from 'apollo-utilities';
import gql from 'graphql-tag';
import { SET_TOAST } from './mutations/set-toast';
import { generalConfig } from '../config';
import { GET_VIEWER_INFO } from './queries/user';
import {
  handleLogout,
  setLoginExpiration,
  getLoginExpiration,
} from '../utils/login';

const cache = new InMemoryCache({
  cacheRedirects: {
    User: {
      collection: (parent, args) =>
        toIdValue(
          cache.config.dataIdFromObject({
            __typename: 'Collection',
            id: args.collectionId,
          }),
        ),
    },
    Collection: {
      pokemon: (parent, args) =>
        toIdValue(
          cache.config.dataIdFromObject({
            __typename: 'Pokemon',
            id: args.pokemonId,
          }),
        ),
    },
  },
});

const defaultState = {
  toast: {
    text: '',
    severity: 'success',
    isOpen: false,
    __typename: 'Toast',
  },
};

cache.writeData({ data: defaultState });

const typeDefs = gql`
  type Toast {
    text: String!
    severity: String!
    isOpen: Boolean!
  }

  input ToastInput {
    text: String!
    severity: String!
    isOpen: Boolean!
  }

  extend type Mutation {
    setToast(input: ToastInput): Toast
  }
`;

const resolvers = {
  Mutation: {
    setToast: (parent, { input }, { cache }) => {
      const data = { toast: input };
      cache.writeData({ data });

      return input;
    },
  },
};

class AuthCheckLink extends ApolloLink {
  request(operation, forward) {
    const loginExpiration = getLoginExpiration();

    if (loginExpiration !== null && Date.now() >= loginExpiration) {
      handleLogout();
    }

    return forward(operation);
  }
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  const errorMessage = networkError
    ? `[Network error]: ${networkError}`
    : 'API errors';

  if (networkError) console.log(errorMessage);

  client.mutate({
    mutation: SET_TOAST,
    variables: { text: errorMessage, severity: 'error', isOpen: true },
  });
});

const httpLink = new HttpLink({
  uri: generalConfig.apiUrl,
  credentials: 'same-origin',
});

export const client = new ApolloClient({
  link: ApolloLink.from([new AuthCheckLink(), errorLink, httpLink]),
  cache,
  typeDefs,
  resolvers,
});

client.query({ query: GET_VIEWER_INFO }).then(({ data }) => {
  const loginExpiration = data?.viewer?.loginExpiration;

  if (loginExpiration !== null) {
    setLoginExpiration(loginExpiration * 1000);
  }
});
