import { gql } from 'apollo-server-express';

export const PokemonInputType = gql`
  input PKXInputProps {
    species: Int!
    ball: Int = 0
    isShiny: Boolean
    isEgg: Boolean
    canGigantamax: Boolean
    ability: Int = 0
    language: Int = 0
    move1: Int = 0
    move2: Int = 0
    move3: Int = 0
    move4: Int = 0
    gender: Int
    currentLevel: Int
    statNature: Int = 0
    ivHP: Int
    ivATK: Int
    ivDEF: Int
    ivSPA: Int
    ivSPD: Int
    ivSPE: Int
    evHP: Int
    evATK: Int
    evDEF: Int
    evSPA: Int
    evSPD: Int
    evSPE: Int
    metYear: Int
    metMonth: Int
    metDay: Int
    eggYear: Int
    eggMonth: Int
    eggDay: Int
    version: Int = 0
    otName: String @scalarLength(max: 12)
    displayTID: Int
    displaySID: Int
    genNumber: Int
  }

  input PKXFile {
    base64PKX: String! @scalarLength(max: 461) # PK8 is 461 bytes
  }

  extend type Mutation {
    "Saves multiple Pokemon to the user's account from PKX props"
    uploadPKXProps(
      pkxProps: [PKXInputProps!]! @listLength(max: 50)
      collectionId: FirestoreId!
    ): [Pokemon] @loginCheck
    "Saves multiple Pokemon to the user's account from a base 64 Pokemon"
    uploadBase64PKXs(
      pkxs: [PKXFile!]! @listLength(max: 50)
      collectionId: FirestoreId!
    ): [Pokemon] @loginCheck
    "Deletes a Pokemon and returns the deleted Pokemon Node"
    deletePokemon(pokemonId: FirestoreId!, collectionId: FirestoreId!): Node
      @loginCheck
  }
`;
