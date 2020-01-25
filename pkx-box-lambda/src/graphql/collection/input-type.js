import { gql } from 'apollo-server-express';

export const CollectionInputType = gql`
  extend type Mutation {
    "Sets the privacy of all Pokemon within a collection."
    setCollectionPrivacy(collectionId: String!, isPublic: Boolean!): Boolean!
    "Saves a list of Pokemon to a collection."
    saveCollection(collectionId: String!, pkxIds: [String!]!): Boolean!
  }
`;
