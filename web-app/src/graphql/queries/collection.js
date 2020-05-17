import gql from 'graphql-tag';
import {
  POKEMON_DETAILS_FRAGMENT,
  POKEMON_DETAILS_FRAGMENT_NAME,
} from '../fragments/pokemon-details';

export const GET_COLLECTION = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  query userCollection($userId: DiscordId!, $collectionId: FirestoreId!, $first:Int!, $after: String!) {
    user(userId: $userId) {
      id
      fullDiscordName
      collection(collectionId: $collectionId) {
        id
        name
        isViewerOwner
        pokemonConnection(first: $first, after: $after) {
          cursor
          pokemonList {
            ...${POKEMON_DETAILS_FRAGMENT_NAME}
          }
        }
      }
    }
  }
`;
