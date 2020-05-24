/* eslint-disable no-undef */
const buildDate = new Date(0);
buildDate.setUTCSeconds(process.env.REACT_APP_BUILD_EPOCH);

export const generalConfig = {
  loginUrl: process.env.REACT_APP_LOGIN_URL,
  apiUrl: process.env.REACT_APP_API,
  gitHash: process.env.REACT_APP_GIT_HASH,
  buildDate: buildDate.toLocaleDateString(),
  googleAnalyticsId: process.env.REACT_APP_GOOGLE_ANALYTICS_ID,
  collectionPreviewPokemonLimit:
    process.env.REACT_APP_COLLECTION_PREVIEW_POKEMON_LIMIT,
};
