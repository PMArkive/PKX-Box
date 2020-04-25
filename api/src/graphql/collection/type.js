import { gql } from 'apollo-server-express';

export const CollectionType = gql`
  type Collection {
    id: FirestoreId
    name: StringMaxLength40
    isPublic: Boolean
    isViewerOwner: Boolean
    pokemon(pokemonId: FirestoreId!): Pokemon
    pokemonList(limit: Int): [Pokemon]
  }
`;
