import gql from 'graphql-tag';
import {
  POKEMON_DETAILS_FRAGMENT,
  POKEMON_DETAILS_FRAGMENT_NAME,
} from './pokemon-details';

export const COLLECTION_PROPS_FRAGMENT_NAME = 'CollectionProps';
export const COLLECTION_PROPS_FRAGMENT = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  fragment ${COLLECTION_PROPS_FRAGMENT_NAME} on Collection {
    id
    name
    pokemonList {
      ...${POKEMON_DETAILS_FRAGMENT_NAME}
    }
  }
`;
