import { gql } from 'apollo-server-express';

export const CollectionInputType = gql`
  input CollectionInput {
    id: FirestoreId
    name: String! @scalarLength(max: 40)
    isPublic: Boolean!
  }

  extend type Mutation {
    "Upserts a collection"
    upsertCollection(collection: CollectionInput!): Collection! @loginCheck
    "Deletes a collection and returns the deleted collection Node"
    deleteCollection(collectionId: FirestoreId!): Node @loginCheck
  }
`;
