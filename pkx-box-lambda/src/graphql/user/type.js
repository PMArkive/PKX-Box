import { gql } from 'apollo-server-express';

export const UserType = gql`
  type User {
    id: String!
    username: String!
    discriminator: String!
  }

  extend type Query {
    "User of the requester."
    user: User!
  }
`;
