import { gql } from 'apollo-server-express';

export const CollectionType = gql`
  extend type Query {
    "Fetches Pokemon from a collection the requester can view.  The user defaults to the requester."
    collection(userId: String, collectionId: String!): [PKXDocument]!
    "Fetches a list of collection names with Pokemon the requester can view.  The user defaults to the requester."
    collectionNames(userId: String): [String!]!
  }
`;
