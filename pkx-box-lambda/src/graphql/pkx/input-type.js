import { gql } from 'apollo-server-express';

export const PKXInputType = gql`
  input VerifiedPKX {
    pkx: String!
    signature: String!
  }

  extend type Mutation {
    "Sets whether a Pokemon is public (can be viewed by everyone) or private (can be viewed by admins and the owner)"
    setPKXPrivacy(pkxId: String!, isPublic: Boolean!): Boolean!
    "Saves multiple PKXs to the user's account"
    savePKXs(
      verifiedPKXs: [VerifiedPKX!]!
      collection: String = "Default"
      isPublic: Boolean = false
    ): [String!]!
  }
`;
