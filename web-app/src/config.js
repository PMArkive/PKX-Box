const buildDate = new Date(0);
buildDate.setUTCSeconds(process.env.REACT_APP_BUILD_EPOCH);

export const generalConfig = {
  loginUrl: process.env.REACT_APP_LOGIN_URL,
  apiUrl: process.env.REACT_APP_API,
  version: process.env.REACT_APP_VERSION,
  buildDate: buildDate.toLocaleDateString(),
};
