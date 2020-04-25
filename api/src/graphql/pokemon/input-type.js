import { gql } from 'apollo-server-express';

export const PokemonInputType = gql`
  extend type Mutation {
    "Saves multiple Pokemon to the user's account"
    uploadBase64PKXs(
      base64PKXs: [String!]!
      collectionId: FirestoreId!
    ): [Pokemon] @loginCheck
    "Deletes a Pokemon and returns the deleted Pokemon Node"
    deletePokemon(pokemonId: FirestoreId!, collectionId: FirestoreId!): Node
      @loginCheck
  }
`;
