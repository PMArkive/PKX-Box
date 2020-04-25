import gql from 'graphql-tag';

export const DELETE_COLLECTION = gql`
  mutation deleteCollection($collectionId: FirestoreId!) {
    deletedCollection: deleteCollection(collectionId: $collectionId) {
      id
    }
  }
`;
