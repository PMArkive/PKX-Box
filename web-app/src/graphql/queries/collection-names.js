import gql from "graphql-tag";

export const GET_COLLECTION_NAMES = gql`
  query collectionNames($userId: String!) {
    collectionNames(userId: $userId)
  }
`;
