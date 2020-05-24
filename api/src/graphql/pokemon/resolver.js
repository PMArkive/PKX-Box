import {
  db,
  userCollection,
  checkIfCollectionExists,
} from '../../services/firestore';
import { PKHEX_PROP_MAP } from './type';
import { parsePKX } from '../../services/pkhex-api';
import { encrypt } from '../../utils/crypto';
import { serializeCursor } from '../../utils/cursor';

export const uploadBase64PKXs = async (
  parent,
  { pkxs, collectionId },
  { user },
) => {
  if (!checkIfCollectionExists(user.id, collectionId)) {
    throw new Error('Collection does not exist!');
  }

  const collectionRef = userCollection
    .doc(user.id)
    .collection('collections')
    .doc(collectionId);

  const batch = db.batch();
  const pkxCollection = collectionRef.collection('pkx');

  const savePKXPromises = pkxs.map(async ({ base64PKX }) => {
    const parsedPKX = await parsePKX(base64PKX);

    // Small checks - should probably add more in the future
    if (
      parsedPKX === null ||
      parsedPKX.Species <= 0 ||
      parsedPKX.Version <= 0 ||
      parsedPKX.Sanity !== 0
    ) {
      throw new Error('Invalid PKX!');
    }

    const newDocRef = pkxCollection.doc();

    const pkx = Object.keys(PKHEX_PROP_MAP).reduce((result, pkhexKey) => {
      const key = PKHEX_PROP_MAP[pkhexKey];

      result[key] = parsedPKX[pkhexKey];
      return result;
    }, {});

    // For older gens that don't have gigantamax
    pkx.canGigantamax = !!pkx.canGigantamax;
    pkx.createdAt = Date.now();
    pkx.boxData = encrypt(Buffer.from(parsedPKX.DecryptedBoxData, 'base64'));

    batch.set(newDocRef, pkx);

    return { id: newDocRef.id, ...pkx };
  });

  const savedPKXs = await Promise.all(savePKXPromises);

  await batch.commit();

  return savedPKXs;
};

export const uploadPKXProps = async (
  parent,
  { pkxProps, collectionId },
  { user },
) => {
  if (!checkIfCollectionExists(user.id, collectionId)) {
    throw new Error('Collection does not exist!');
  }

  const collectionRef = userCollection
    .doc(user.id)
    .collection('collections')
    .doc(collectionId);

  const batch = db.batch();
  const pkxCollection = collectionRef.collection('pkx');

  const savedPKXs = pkxProps.map(pkx => {
    const newDocRef = pkxCollection.doc();

    pkx.createdAt = Date.now();

    batch.set(newDocRef, pkx);

    return { id: newDocRef.id, ...pkx };
  });

  await batch.commit();

  return savedPKXs;
};

export const deletePokemon = async (
  parent,
  { pokemonId, collectionId },
  { user },
) => {
  // Unfortunately, Firestore doesn't give us feedback if we try to delete a collection that doesn't exist
  await userCollection
    .doc(user.id)
    .collection('collections')
    .doc(collectionId)
    .collection('pkx')
    .doc(pokemonId)
    .delete();

  return { id: pokemonId };
};

export const fetchPokemonList = async (
  { ownerId, id: collectionId },
  { first, after, orderBy },
  { dataSources },
) => {
  const pokemonList = await dataSources.firestore.getPokemonListByCollectionId(
    ownerId,
    collectionId,
    first,
    after,
    orderBy,
  );

  if (pokemonList.length === 0) return { pokemonList, cursor: null };

  const lastPokemon = pokemonList[pokemonList.length - 1];
  const cursor = serializeCursor(orderBy, lastPokemon);

  return {
    pokemonList,
    cursor,
  };
};

export const fetchPokemon = (
  { ownerId, id: collectionId },
  { pokemonId },
  { dataSources },
) =>
  dataSources.firestore.getPokemonByPokemonId(ownerId, collectionId, pokemonId);
