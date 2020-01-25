import {
  db,
  getUserPKXCollection,
  getProtectedUserPKXCollection,
} from '../../services/firestore';

export const setCollectionPrivacy = async (
  parent,
  { collectionId, isPublic },
  { user },
) => {
  const batch = db.batch();
  const pkxCollection = await getUserPKXCollection(user.id)
    .where('collection', '==', collectionId)
    .get();

  pkxCollection.docs.forEach(doc => {
    batch.update(doc.ref, 'isPublic', isPublic);
  });

  await batch.commit();

  return true;
};

export const saveCollection = async (
  parent,
  { collectionId, pkxIds },
  { user },
) => {
  const batch = db.batch();
  const pkxCollection = getUserPKXCollection(user.id);

  pkxIds.forEach(pkxId => {
    const pkxRef = pkxCollection.doc(pkxId);
    batch.update(pkxRef, 'collection', collectionId);
  });

  await batch.commit();

  return true;
};

export const fetchCollection = async (
  parent,
  { userId: userIdArg, collectionId },
  { user },
) => {
  const userId = userIdArg || user.id;
  const res = await getProtectedUserPKXCollection(user, userId)
    .where('collection', '==', collectionId)
    .get();

  return res.docs;
};

export const fetchCollectionNames = async (
  parent,
  { userId: userIdArg },
  { user },
) => {
  const userId = userIdArg || user.id;
  const res = await getProtectedUserPKXCollection(user, userId).get();
  const collectionNames = res.docs.map(doc => doc.get('collection'));

  return [...new Set(collectionNames)];
};
