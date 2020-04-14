import { userCollection, mapFirestoreArray } from '../../services/firestore';

export const fetchCollections = async ({ id: userId }) => {
  const collections = await userCollection
    .doc(userId)
    .collection('collections')
    .get();
  return mapFirestoreArray(collections, collection => ({
    id: collection.id,
    ownerId: userId,
  }));
};
