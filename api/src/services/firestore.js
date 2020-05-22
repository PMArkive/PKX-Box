import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export const db = admin.firestore();

export const mapFirestoreArray = (queryResults, func = item => item) => {
  const arr = [];

  queryResults.forEach((res, index) => arr.push(func(res, index)));

  return arr;
};

// From https://firebase.google.com/docs/firestore/manage-data/delete-data#collections
const deleteQueryBatch = async (query, resolve, reject) => {
  try {
    const snapshot = await query.get();

    // When there are no documents left, we are done
    if (snapshot.size === 0) {
      resolve();
      return;
    }

    // Delete documents in a batch
    const batch = db.batch();
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();

    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
      deleteQueryBatch(db, query, resolve, reject);
    });
  } catch (error) {
    reject(error);
  }
};

export const deleteCollection = (collectionRef, batchSize) => {
  const query = collectionRef.orderBy('__name__').limit(batchSize);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(query, resolve, reject);
  });
};

export const checkIfCollectionExists = async (userId, collectionId) => {
  const collectionRef = userCollection
    .doc(userId)
    .collection('collections')
    .doc(collectionId);
  const collection = await collectionRef.get();

  return collection.exists;
};

export const userCollection = db.collection('user');
