import { gql } from 'apollo-server-express';
import { PKXType } from './pkx/type';
import { PKXInputType } from './pkx/input-type';
import { savePKXs, fetchPKXList } from './pkx/resolver';
import { CollectionType } from './collection/type';
import { UserType } from './user/type';
import { fetchUser, getUserFromContext, fetchOwner } from './user/resolver';
import { fetchCollections } from './collection/resolver';

const rootTypes = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export const typeDefs = [
  rootTypes,
  PKXType,
  PKXInputType,
  CollectionType,
  UserType,
];

export const resolvers = {
  Query: {
    me: getUserFromContext,
    user: fetchUser,
  },
  Mutation: {
    savePKXs,
  },
  User: {
    collections: fetchCollections,
  },
  Collection: {
    pokemon: fetchPKXList,
  },
  PKXDocument: {
    owner: fetchOwner,
  },
};
