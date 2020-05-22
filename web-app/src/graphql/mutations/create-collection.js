import gql from 'graphql-tag';
import {
  POKEMON_DETAILS_FRAGMENT,
  POKEMON_DETAILS_FRAGMENT_NAME,
} from '../fragments/pokemon-details';
import { generalConfig } from '../../config';

export const CREATE_COLLECTION = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  mutation createCollection($name: StringMaxLength40!, $isPublic: Boolean!) {
    newCollection: upsertCollection(
      collection: { name: $name, isPublic: $isPublic }
    ) {
      id
      name
      isPublic
      isViewerOwner
      pokemonConnection(first: ${generalConfig.collectionPreviewPokemonLimit}) {
        cursor
        pokemonList {
          ...${POKEMON_DETAILS_FRAGMENT_NAME}
        }
      }
    }
  }
`;
