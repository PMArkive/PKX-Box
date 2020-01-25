import gql from "graphql-tag";

export const GET_USER_INFO = gql`
  {
    user {
      id
      username
      discriminator
    }
  }
`;
