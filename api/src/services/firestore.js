import admin from 'firebase-admin';
import DataLoader from 'dataloader';
import { generalConfig } from '../config/general';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: generalConfig.firestoreUrl,
});

export const db = admin.firestore();

export const mapFirestoreArray = (queryResults, func = item => item) => {
  const arr = [];

  queryResults.forEach(res => arr.push(func(res)));

  return arr;
};

export const userCollection = db.collection('user');

export const fetchUsers = async userIds => {
  const refs = userIds.map(userId => userCollection.doc(userId));
  const users = await db.getAll(...refs);
  return mapFirestoreArray(users, user => ({ id: user.id, ...user.data() }));
};

export const userLoader = new DataLoader(fetchUsers);
