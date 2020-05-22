import { gql } from 'apollo-server-express';

export const PokemonInputType = gql`
  input PKXFile {
    base64PKX: String! @scalarLength(max: 461) # PK8 is 461 bytes
  }

  extend type Mutation {
    "Saves multiple Pokemon to the user's account"
    uploadBase64PKXs(
      pkxs: [PKXFile!]! @listLength(max: 50)
      collectionId: FirestoreId!
    ): [Pokemon] @loginCheck
    "Deletes a Pokemon and returns the deleted Pokemon Node"
    deletePokemon(pokemonId: FirestoreId!, collectionId: FirestoreId!): Node
      @loginCheck
  }
`;
