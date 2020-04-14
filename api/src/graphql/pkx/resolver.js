import {
  db,
  userCollection,
  mapFirestoreArray,
} from '../../services/firestore';
import { parsePKX } from '../../services/pkhex-api';

export const savePKXs = async (
  parent,
  { base64PKXs, id: collectionId, isPublic },
  { user },
) => {
  const batch = db.batch();
  const pkxCollection = userCollection
    .doc(user.id)
    .collection('collections')
    .doc(collectionId)
    .collection('pkx');

  const savePKXPromises = base64PKXs.map(async base64PKX => {
    const parsedPKX = await parsePKX(base64PKX);

    if (parsedPKX === null) return;

    const { pkx } = parsedPKX;
    const newDocRef = pkxCollection.doc();

    batch.set(newDocRef, { pkx, isPublic });

    return { id: newDocRef.id, pkx, isPublic };
  });

  const savedPKXs = await Promise.all(savePKXPromises);

  await batch.commit();

  return savedPKXs;
};

export const fetchPKXList = async ({ ownerId, id: collectionId }) => {
  const pokemon = await userCollection
    .doc(ownerId)
    .collection('collections')
    .doc(collectionId)
    .collection('pkx')
    .get();
  return mapFirestoreArray(pokemon, pkx => ({
    id: pkx.id,
    ownerId,
    ...pkx.data(),
  }));
};
