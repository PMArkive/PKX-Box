import { gql } from 'apollo-server-express';

export const CollectionInputType = gql`
  extend type Mutation {
    "Upserts a collection"
    upsertCollection(
      collectionId: FirestoreId
      newCollectionName: StringMaxLength40!
      makeCollectionPublic: Boolean!
    ): Collection! @loginCheck
    "Deletes a collection and returns the deleted collection Node"
    deleteCollection(collectionId: FirestoreId!): Node @loginCheck
  }
`;
