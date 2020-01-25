import { gql } from 'apollo-server-express';
import BigInt from 'apollo-type-bigint';
import { PKXType } from './pkx/type';
import { PKXInputType } from './pkx/input-type';
import {
  fetchPKX,
  savePKXs,
  setPKXPrivacy,
  fetchPKXList,
} from './pkx/resolver';
import { CollectionType } from './collection/type';
import { CollectionInputType } from './collection/input-type';
import {
  fetchCollection,
  saveCollection,
  fetchCollectionNames,
  setCollectionPrivacy,
} from './collection/resolver';
import { UserType } from './user/type';
import { getUser } from './user/resolver';

const rootTypes = gql`
  scalar BigInt

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
  CollectionInputType,
  UserType,
];

export const resolvers = {
  BigInt: new BigInt('bigInt'),
  PKXDocument: {
    id: parent => parent.id,
    pkx: parent => parent.data(),
  },
  Query: {
    pkx: fetchPKX,
    pkxList: fetchPKXList,
    collection: fetchCollection,
    collectionNames: fetchCollectionNames,
    user: getUser,
  },
  Mutation: {
    savePKXs,
    setPKXPrivacy,
    saveCollection,
    setCollectionPrivacy,
  },
};
