import { gql } from 'apollo-server-express';

export const UserType = gql`
  type User {
    id: String!
    username: String
    discriminator: String
    collections: [Collection]
  }

  extend type Query {
    "User of the requester."
    me: User
    user(id: String!): User
  }
`;
