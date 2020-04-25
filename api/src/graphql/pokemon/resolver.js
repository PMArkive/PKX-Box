import { db, userCollection } from '../../services/firestore';
import { PKHEX_PROP_MAP } from './type';
import { parsePKX } from '../../services/pkhex-api';
import { encrypt } from '../../utils/crypto';

export const uploadBase64PKXs = async (
  parent,
  { base64PKXs, collectionId },
  { user },
) => {
  const collectionRef = userCollection
    .doc(user.id)
    .collection('collections')
    .doc(collectionId);
  const collection = await collectionRef.get();

  if (!collection.exists) throw new Error("Collection doesn't exist");

  const batch = db.batch();
  const pkxCollection = collectionRef.collection('pkx');

  const savePKXPromises = base64PKXs.map(async base64PKX => {
    const parsedPKX = await parsePKX(base64PKX);

    if (parsedPKX === null) return;

    const newDocRef = pkxCollection.doc();

    const pkx = Object.keys(PKHEX_PROP_MAP).reduce((result, pkhexKey) => {
      const key = PKHEX_PROP_MAP[pkhexKey];

      result[key] = parsedPKX[pkhexKey];
      return result;
    }, {});

    // For older gens that don't have gigantamax
    pkx.canGigantamax = !!pkx.canGigantamax;
    pkx.boxData = encrypt(Buffer.from(parsedPKX.DecryptedBoxData, 'base64'));

    batch.set(newDocRef, pkx);

    return { id: newDocRef.id, ...pkx };
  });

  const savedPKXs = await Promise.all(savePKXPromises);

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
  { limit },
  { dataSources },
) => {
  return dataSources.firestore.getPokemonListByCollectionId(
    ownerId,
    collectionId,
    limit,
  );
};

export const fetchPokemon = (
  { ownerId, id: collectionId },
  { pokemonId },
  { dataSources },
) =>
  dataSources.firestore.getPokemonByPokemonId(ownerId, collectionId, pokemonId);
