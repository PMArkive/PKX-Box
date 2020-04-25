import gql from 'graphql-tag';
import {
  POKEMON_DETAILS_FRAGMENT,
  POKEMON_DETAILS_FRAGMENT_NAME,
} from '../fragments/pokemon-details';

export const UPLOAD_PKX = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  mutation uploadBase64PKXs($base64PKXs: [String!]!, $collectionId: FirestoreId!) {
    uploadBase64PKXs(base64PKXs: $base64PKXs, collectionId: $collectionId) {
      ...${POKEMON_DETAILS_FRAGMENT_NAME}
    }
  }
`;
