import gql from "graphql-tag";
import { PKX_DETAILS_FRAGMENT } from "../fragments/pkx-details";

export const GET_PKX_DETAILS = gql`
  ${PKX_DETAILS_FRAGMENT}

  query pkxDetails($pkxId: String!, $userId: String!) {
    pkx(pkxId: $pkxId, userId: $userId) {
      ...PKXDetails
    }
  }
`;
