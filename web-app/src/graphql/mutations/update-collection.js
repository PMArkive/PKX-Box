import gql from 'graphql-tag';

export const UPDATE_COLLECTION = gql`
  mutation updateCollection(
    $collectionId: FirestoreId!
    $newCollectionName: StringMaxLength40!
    $makeCollectionPublic: Boolean!
  ) {
    upsertCollection(
      collectionId: $collectionId
      newCollectionName: $newCollectionName
      makeCollectionPublic: $makeCollectionPublic
    ) {
      id
      name
      isPublic
    }
  }
`;
