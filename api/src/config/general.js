export const generalConfig = {
  jwtSecret: process.env.JWT_SECRET.replace(/\\n/g, '\n'),
  pkhexAPIUrl: process.env.PKHEX_API_URL,
  firestoreUrl: process.env.FIRESTORE_URL,
  cryptoAlgorithm: process.env.CRYPTO_ALGORITHM,
  cryptoKey: Buffer.from(process.env.CRYPTO_KEY, 'hex'),
  cryptoIVSize: Number(process.env.CRYPTO_IV_SIZE),
  collectionDeleteBatchSize: Number(process.env.COLLECTION_DELETE_BATCH_SIZE),
  corsOrigins: process.env.CORS_ORIGINS.split(','),
};
