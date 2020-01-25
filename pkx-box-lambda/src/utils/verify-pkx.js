import crypto from 'crypto';

export const parsePKX = (pkx, signature) => {
  const isValid = crypto.verify(
    'sha1',
    Buffer.from(pkx, 'utf8'),
    process.env.PKX_VERIFY_PEM.split('\\n').join('\n'),
    Buffer.from(signature, 'base64'),
  );

  return isValid ? JSON.parse(pkx) : null;
};
