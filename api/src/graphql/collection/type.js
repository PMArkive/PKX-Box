import { gql } from 'apollo-server-express';

export const CollectionType = gql`
  enum PokemonOrderProperty {
    species
    ball
    isShiny
    isEgg
    canGigantamax
    isLegal
  }

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
      "Property to sort Pokemon by"
      orderBy: PokemonOrderProperty = species
    ): PokemonConnection!
  }
`;
