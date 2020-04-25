import DataLoader from 'dataloader';
import { DataSource } from 'apollo-datasource';
import { userCollection, mapFirestoreArray, db } from '../services/firestore';
import { decrypt } from '../utils/crypto';

const formatFirestorePKX = (pkxs, callingUserId, getOwnerId) => {
  return mapFirestoreArray(pkxs, (pkx, index) => {
    const pkxData = pkx.data();
    const boxData = pkxData?.pkx?.BoxData;
    const ownerId = getOwnerId(index);
    const isOwner = callingUserId === ownerId;

    return {
      id: pkx.id,
      ownerId,
      ...pkxData,
      BoxData: isOwner && boxData ? decrypt(boxData).toString('base64') : null,
    };
  });
};

const formatFirestoreCollection = (collections, callingUserId, getOwnerId) => {
  return mapFirestoreArray(collections, (collection, index) => {
    const ownerId = getOwnerId(index);
    const isOwner = callingUserId === ownerId;
    const collectionData = collection.data();

    if (isOwner || collectionData.isPublic) {
      return {
        id: collection.id,
        ownerId,
        ...collectionData,
      };
    }

    return null;
  });
};

export class FireStoreDataSource extends DataSource {
  constructor() {
    super();

    this.context = {};
    this.userByUserIdLoader = this.getUserByUserIdLoader();
    this.collectionByCollectionIdLoader = this.getCollectionByCollectionIdLoader();
    this.pokemonByPokemonIdLoader = this.getPokemonByPokemonIdLoader();
  }

  initialize(config) {
    this.context = config.context;
    this.callingUserId = this.context?.user?.id;
  }

  getUserByUserIdLoader() {
    return new DataLoader(
      async userIds => {
        const refs = userIds.map(userId => userCollection.doc(userId));
        const users = await db.getAll(...refs);

        return mapFirestoreArray(users, user => ({
          id: user.id,
          ...user.data(),
        }));
      },
      { cache: false },
    );
  }

  getCollectionByCollectionIdLoader() {
    return new DataLoader(
      async ids => {
        const refs = ids.map(({ userId, collectionId }) =>
          userCollection
            .doc(userId)
            .collection('collections')
            .doc(collectionId),
        );
        const collections = await db.getAll(...refs);

        return formatFirestoreCollection(
          collections,
          this.callingUserId,
          index => ids[index].userId,
        );
      },
      { cache: false },
    );
  }

  getPokemonByPokemonIdLoader() {
    return new DataLoader(
      async ids => {
        const refs = ids.map(({ userId, collectionId, pokemonId }) =>
          userCollection
            .doc(userId)
            .collection('collections')
            .doc(collectionId)
            .collection('pkx')
            .doc(pokemonId),
        );
        const pkxs = await db.getAll(...refs);

        return formatFirestorePKX(
          pkxs,
          this.callingUserId,
          index => ids[index].userId,
        );
      },
      { cache: false },
    );
  }

  getUserByUserId(userId) {
    return this.userByUserIdLoader.load(userId);
  }

  getCollectionByCollectionId(userId, collectionId) {
    return this.collectionByCollectionIdLoader.load({ userId, collectionId });
  }

  async getCollectionsByUserId(userId) {
    const isOwner = this.callingUserId === userId;
    const ref = userCollection.doc(userId).collection('collections');

    const query = isOwner ? ref : ref.where('isPublic', '==', true);
    const collections = await query.get();

    return formatFirestoreCollection(
      collections,
      this.callingUserId,
      () => userId,
    );
  }

  getPokemonByPokemonId(userId, collectionId, pokemonId) {
    return this.pokemonByPokemonIdLoader.load({
      userId,
      collectionId,
      pokemonId,
    });
  }

  async getPokemonListByCollectionId(userId, collectionId, limit) {
    const query = userCollection
      .doc(userId)
      .collection('collections')
      .doc(collectionId)
      .collection('pkx');
    const pkxs = limit ? await query.limit(limit).get() : await query.get();

    return formatFirestorePKX(pkxs, this.callingUserId, () => userId);
  }
}
