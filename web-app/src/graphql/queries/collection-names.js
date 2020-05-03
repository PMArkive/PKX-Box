import gql from 'graphql-tag';
import { generalConfig } from '../../config';

export const GET_COLLECTION_NAMES = gql`
  query userCollectionNames($userId: DiscordId!) {
    user(userId: $userId) {
      collections {
        id
        name
        isPublic
        isViewerOwner
        pokemonConnection(first: ${generalConfig.collectionPreviewPokemonLimit}) {
          pokemonList {
            id
            species
          }
        }
      }
    }
  }
`;
