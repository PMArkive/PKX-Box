import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const db = admin.firestore();

const userCollection = db.collection('user');

export const upsertDiscordUser = user => {
  return userCollection.doc(user.id).set({
    discordUsername: user.username,
    discordDiscriminator: user.discriminator,
  });
};
