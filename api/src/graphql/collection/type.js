import { gql } from 'apollo-server-express';

export const CollectionType = gql`
  type Collection {
    id: FirestoreId
    name: StringMaxLength40
    isPublic: Boolean
    isViewerOwner: Boolean
    pokemon(pokemonId: String!): Pokemon
    pokemonConnection(
      "Number of pokemon to fetch"
      first: Int!
      "Cursor - leave empty to start paginating"
      after: String = ""
    ): PokemonConnection!
  }
`;
