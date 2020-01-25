export const checkIfAuthorized = (user, requestedUserId) => {
  const isOwner = requestedUserId === user.id;
  return isOwner || user.isAdmin;
};
