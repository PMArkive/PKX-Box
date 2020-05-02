import { gql } from 'apollo-server-express';

export const LoginType = gql`
  type Login {
    loginExpiration: Int
    user: User
  }

  extend type Query {
    viewer: Login
  }
`;
