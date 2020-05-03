import { gql } from 'apollo-server-express';
import { PokemonType } from './pokemon/type';
import { PokemonInputType } from './pokemon/input-type';
import {
  uploadBase64PKXs,
  deletePokemon,
  fetchPokemonList,
  fetchPokemon,
} from './pokemon/resolver';
import { CollectionType } from './collection/type';
import { UserType } from './user/type';
import { fetchUser, getUserFromContext } from './user/resolver';
import {
  fetchCollections,
  fetchCollection,
  upsertCollection,
  deleteCollection,
} from './collection/resolver';
import { CollectionInputType } from './collection/input-type';
import { LoginCheckType } from './directives';
import { createStringSizeScalar } from './scalars';
import { getLogin } from './login/resolver';
import { LoginType } from './login/type';

const rootTypes = gql`
  scalar FirestoreId
  scalar DiscordId
  scalar StringMaxLength40

  type Node {
    id: String!
  }

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export const typeDefs = [
  rootTypes,
  LoginCheckType,
  LoginType,
  PokemonType,
  PokemonInputType,
  CollectionType,
  CollectionInputType,
  UserType,
];

export const resolvers = {
  FirestoreId: createStringSizeScalar({
    name: 'FirestoreId',
    maxLength: 30,
  }),
  DiscordId: createStringSizeScalar({
    name: 'DiscordId',
    maxLength: 20,
  }),
  StringMaxLength40: createStringSizeScalar({
    name: 'StringMaxLength40',
    maxLength: 40,
  }),
  Query: {
    viewer: getLogin,
    user: fetchUser,
  },
  Mutation: {
    uploadBase64PKXs,
    deletePokemon,
    upsertCollection,
    deleteCollection,
  },
  Login: {
    user: getUserFromContext,
  },
  User: {
    collection: fetchCollection,
    collections: fetchCollections,
  },
  Collection: {
    pokemon: fetchPokemon,
    pokemonConnection: fetchPokemonList,
    isViewerOwner: ({ ownerId }, args, { user }) => ownerId === user?.id,
  },
};
