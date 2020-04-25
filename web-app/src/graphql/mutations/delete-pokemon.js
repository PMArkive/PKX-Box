import gql from 'graphql-tag';

export const DELETE_POKEMON = gql`
  mutation deletePokemon($collectionId: FirestoreId!, $pokemonId: FirestoreId!) {
    deletedPokemon: deletePokemon(collectionId: $collectionId, pokemonId: $pokemonId) {
      id
    }
  }
`;
