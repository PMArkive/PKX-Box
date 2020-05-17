import gql from 'graphql-tag';
import {
  POKEMON_DETAILS_FRAGMENT,
  POKEMON_DETAILS_FRAGMENT_NAME,
} from '../fragments/pokemon-details';

export const GET_POKEMON_DETAILS = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  query pokemonDetails($userId: DiscordId!, $collectionId: FirestoreId!, $pokemonId: FirestoreId!) {
    user(userId:$userId) {
      id
      fullDiscordName
      collection(collectionId:$collectionId) {
        id
        name
        pokemon(pokemonId:$pokemonId) {
          ...${POKEMON_DETAILS_FRAGMENT_NAME}
        }
      }
    }
  }
`;
