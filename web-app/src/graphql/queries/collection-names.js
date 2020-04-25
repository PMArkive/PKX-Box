import gql from 'graphql-tag';

export const GET_COLLECTION_NAMES = gql`
  query userCollectionNames($userId: DiscordId!) {
    user(userId: $userId) {
      collections {
        id
        name
        isPublic
        isViewerOwner
        pokemonList(limit: 18) {
          id
          species
        }
      }
    }
  }
`;
