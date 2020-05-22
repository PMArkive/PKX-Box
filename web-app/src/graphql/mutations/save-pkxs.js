import gql from 'graphql-tag';
import {
  POKEMON_DETAILS_FRAGMENT,
  POKEMON_DETAILS_FRAGMENT_NAME,
} from '../fragments/pokemon-details';

export const UPLOAD_PKX = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  mutation uploadBase64PKXs($pkxs: [PKXFile!]!, $collectionId: FirestoreId!) {
    uploadBase64PKXs(pkxs: $pkxs, collectionId: $collectionId) {
      ...${POKEMON_DETAILS_FRAGMENT_NAME}
    }
  }
`;
