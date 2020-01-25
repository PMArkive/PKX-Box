import gql from "graphql-tag";
import { PKX_DETAILS_FRAGMENT } from "../fragments/pkx-details";

export const GET_COLLECTION = gql`
  ${PKX_DETAILS_FRAGMENT}

  query collection($userId: String!, $collectionId: String!) {
    collection(userId: $userId, collectionId: $collectionId) {
      ...PKXDetails
    }
  }
`;
