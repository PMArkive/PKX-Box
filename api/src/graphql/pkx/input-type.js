import { gql } from 'apollo-server-express';

export const PKXInputType = gql`
  extend type Mutation {
    "Saves multiple PKXs to the user's account"
    savePKXs(
      base64PKXs: [String!]!
      collectionId: String = "Default"
      isPublic: Boolean = false
    ): [PKXDocument]
  }
`;
