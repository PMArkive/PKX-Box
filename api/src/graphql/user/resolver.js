import { userLoader } from '../../services/firestore';

export const getUserFromContext = (parent, args, { user }) => user;

export const fetchUser = (parent, { id }) => userLoader.load(id);

export const fetchOwner = ({ ownerId }) => userLoader.load(ownerId);
