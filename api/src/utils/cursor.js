const parseBoolean = bool => bool === 'true';

const cursorDeserializers = {
  species: parseInt,
  ball: parseInt,
  isShiny: parseBoolean,
  isEgg: parseBoolean,
  canGigantamax: parseBoolean,
  isLegal: parseBoolean,
};

export const deserializeCursor = (orderBy, serializedCursor) => {
  const [orderValue, id] = Buffer.from(serializedCursor, 'base64')
    .toString('utf8')
    .split('|');
  const deserializer = cursorDeserializers?.[orderBy] || Boolean;
  return {
    id,
    orderValue: deserializer(orderValue),
  };
};

export const serializeCursor = (orderBy, node) => {
  const orderValue = node?.[orderBy]?.toString();
  const cursor = `${orderValue}|${node.id}`;
  return Buffer.from(cursor, 'utf8').toString('base64');
};
