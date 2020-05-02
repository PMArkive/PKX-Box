import gql from 'graphql-tag';

export const GET_USER_INFO = gql`
  {
    viewer {
      user {
        id
        discordUsername
        discordDiscriminator
      }
    }
  }
`;
