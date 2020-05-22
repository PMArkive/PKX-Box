import gql from 'graphql-tag';

export const UPDATE_COLLECTION = gql`
  mutation updateCollection(
    $id: FirestoreId!
    $name: StringMaxLength40!
    $isPublic: Boolean!
  ) {
    upsertCollection(
      collection: { id: $id, name: $name, isPublic: $isPublic }
    ) {
      id
      name
      isPublic
    }
  }
`;
