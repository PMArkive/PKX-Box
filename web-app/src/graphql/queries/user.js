import gql from 'graphql-tag';

export const GET_USER_INFO = gql`
  {
    viewer {
      loginExpiration
      user {
        id
        discordUsername
        discordDiscriminator
      }
    }
  }
`;
