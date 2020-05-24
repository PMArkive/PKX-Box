export const createPokemonRoute = (userId, collectionId, pokemonId) =>
  `/user/${userId}/${collectionId}/${pokemonId}`;

export const createCollectionRoute = (userId, collectionId) =>
  `/user/${userId}/${collectionId}`;

export const createCollectionListRoute = (userId) => `/user/${userId}`;
