import admin from 'firebase-admin';
import { checkIfAuthorized } from '../utils/check-if-authorized';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: process.env.FIRESTORE_URL,
});

export const db = admin.firestore();

export const pkxCollection = db.collection('pkx');

export const getUserPKXCollection = userId =>
  pkxCollection.doc(userId).collection('pkx');

export const getProtectedUserPKXCollection = (user, requestedUserId) => {
  const collectionReference = getUserPKXCollection(requestedUserId);
  const isAuthorized = checkIfAuthorized(user, requestedUserId);

  return isAuthorized
    ? collectionReference
    : collectionReference.where('isPublic', '==', true);
};
