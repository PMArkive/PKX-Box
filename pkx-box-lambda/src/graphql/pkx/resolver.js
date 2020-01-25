import {
  db,
  getUserPKXCollection,
  getProtectedUserPKXCollection,
} from '../../services/firestore';
import { parsePKX } from '../../utils/verify-pkx';
import { checkIfAuthorized } from '../../utils/check-if-authorized';

export const setPKXPrivacy = async (parent, { pkxId, isPublic }, { user }) => {
  await getUserPKXCollection(user.id)
    .doc(pkxId)
    .update('isPublic', isPublic);

  return true;
};

export const savePKXs = async (
  parent,
  { verifiedPKXs, collection, isPublic },
  { user },
) => {
  const batch = db.batch();
  const pkxCollection = getUserPKXCollection(user.id);

  const newIds = verifiedPKXs.map(({ pkx, signature }) => {
    const parsedPKX = parsePKX(pkx, signature);

    if (parsedPKX === null) return;

    parsedPKX.collection = collection;
    parsedPKX.isPublic = isPublic;

    const newDocRef = pkxCollection.doc();

    batch.set(newDocRef, parsedPKX);

    return newDocRef.id;
  });

  await batch.commit();

  return newIds;
};

export const fetchPKX = async (parent, { userId, pkxId }, { user }) => {
  const res = await getUserPKXCollection(userId)
    .doc(pkxId)
    .get();
  const isAuthorized = checkIfAuthorized(user, userId) || res.get('isPublic');

  return isAuthorized ? res : null;
};

export const fetchPKXList = async (parent, { userId: userIdArg }, { user }) => {
  const userId = userIdArg || user.id;
  const res = await getProtectedUserPKXCollection(user, userId).get();

  return res.docs;
};
