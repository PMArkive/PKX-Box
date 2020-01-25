import gql from "graphql-tag";
import { PKX_DETAILS_FRAGMENT } from "../fragments/pkx-details";

export const SAVE_VERIFIED_PKXS = gql`
  mutation saveVerifiedPKXs(
    $verifiedPKXs: [VerifiedPKX!]!
    $collection: String
    $isPublic: Boolean
  ) {
    savePKXs(
      verifiedPKXs: $verifiedPKXs
      collection: $collection
      isPublic: $isPublic
    )
  }
`;

export const UPLOAD_PKX_STRINGS = gql`
  ${PKX_DETAILS_FRAGMENT}

  mutation uploadPKXStrings(
    $pkxs: [String!]!
    $collection: String
    $isPublic: Boolean
  ) {
    uploadPKXs(pkxs: $pkxs, collection: $collection, isPublic: $isPublic)
      @client {
      ...PKXDetails
    }
  }
`;
