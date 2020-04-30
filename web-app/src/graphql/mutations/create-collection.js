import gql from 'graphql-tag';

export const CREATE_COLLECTION = gql`
  mutation createCollection($name: StringMaxLength40!, $isPublic: Boolean!) {
    newCollection: upsertCollection(
      newCollectionName: $name
      makeCollectionPublic: $isPublic
    ) {
      id
      name
      isPublic
      isViewerOwner
    }
  }
`;
