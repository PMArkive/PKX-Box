import gql from 'graphql-tag';
import {
  POKEMON_DETAILS_FRAGMENT,
  POKEMON_DETAILS_FRAGMENT_NAME,
} from '../fragments/pokemon-details';

export const GET_COLLECTION = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  query userCollection($userId: DiscordId!, $collectionId: FirestoreId!) {
    user(userId: $userId) {
      collection(collectionId: $collectionId) {
        id
        name
        isViewerOwner
        pokemonList {
          ...${POKEMON_DETAILS_FRAGMENT_NAME}
        }
      }
    }
  }
`;
