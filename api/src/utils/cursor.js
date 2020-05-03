export const getCursorFromNode = node => {
  return Buffer.from(
    `${node.id}|${node.createdAt.toString()}`,
    'utf8',
  ).toString('base64');
};

export const parseNodeCursor = cursor => {
  const [id, createdAt] = Buffer.from(cursor, 'base64')
    .toString('utf8')
    .split('|');
  return {
    createdAt: parseInt(createdAt, 10),
    id,
  };
};
