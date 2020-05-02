export const getLogin = (parent, args, { user }) => ({
  loginExpiration: user?.loginExpiration,
});
