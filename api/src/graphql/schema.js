import { gql } from 'apollo-server-express';
import { GraphQLString } from 'graphql';
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
import { LoginCheckType } from './directives/login-check';
import { LimitedLengthType } from './scalars';
import { getLogin } from './login/resolver';
import { LoginType } from './login/type';
import { ScalarLengthType } from './directives/scalar-length';
import { ListLengthType } from './directives/list-length';

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
  ScalarLengthType,
  ListLengthType,
  LoginType,
  PokemonType,
  PokemonInputType,
  CollectionType,
  CollectionInputType,
  UserType,
];

export const resolvers = {
  FirestoreId: new LimitedLengthType(GraphQLString, 30, 'FirestoreId'),
  DiscordId: new LimitedLengthType(GraphQLString, 20, 'DiscordId'),
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
    fullDiscordName: ({ discordUsername, discordDiscriminator }) =>
      `${discordUsername}#${discordDiscriminator}`,
  },
  Collection: {
    pokemon: fetchPokemon,
    pokemonConnection: fetchPokemonList,
    isViewerOwner: ({ ownerId }, args, { user }) => ownerId === user?.id,
  },
};
