export const getUserFromContext = (parent, args, { user }) => user;

export const fetchUser = (parent, { userId }, { dataSources }) =>
  dataSources.firestore.getUserByUserId(userId);
