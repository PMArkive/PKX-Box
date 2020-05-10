import gql from 'graphql-tag';

export const GET_VIEWER_INFO = gql`
  query viewerInfo {
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
