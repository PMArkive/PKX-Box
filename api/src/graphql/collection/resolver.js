import {
  userCollection,
  deleteCollection as deleteFirebaseCollection,
} from '../../services/firestore';
import { generalConfig } from '../../config/general';

export const upsertCollection = async (
  parent,
  { collectionId, newCollectionName, makeCollectionPublic },
  { user },
) => {
  const collection = {
    name: newCollectionName,
    isPublic: makeCollectionPublic,
  };
  const collectionsRef = userCollection.doc(user.id).collection('collections');
  const collectionRef = collectionId
    ? collectionsRef.doc(collectionId)
    : // Passing undefined to `doc` throws an error
      collectionsRef.doc();

  await collectionRef.set(collection);

  return { id: collectionRef.id, ownerId: user.id, ...collection };
};

export const deleteCollection = async (parent, { collectionId }, { user }) => {
  const collectionRef = userCollection
    .doc(user.id)
    .collection('collections')
    .doc(collectionId);

  // Unfortunately, Firestore doesn't give us feedback if we try to delete a collection that doesn't exist
  await deleteFirebaseCollection(
    collectionRef.collection('pkx'),
    generalConfig.collectionDeleteBatchSize,
  );
  await collectionRef.delete();

  return { id: collectionId };
};

export const fetchCollections = async (
  { id: userId },
  args,
  { dataSources },
) => {
  return dataSources.firestore.getCollectionsByUserId(userId);
};

export const fetchCollection = (
  { id: userId },
  { collectionId },
  { dataSources },
) => dataSources.firestore.getCollectionByCollectionId(userId, collectionId);
