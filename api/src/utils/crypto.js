import crypto from 'crypto';
import { generalConfig } from '../config/general';

export const encrypt = plainText => {
  const iv = Buffer.from(crypto.randomBytes(generalConfig.cryptoIVSize));
  const cipher = crypto.createCipheriv(
    generalConfig.cryptoAlgorithm,
    generalConfig.cryptoKey,
    iv,
  );
  const encrypted = cipher.update(plainText);
  const test = Buffer.concat([encrypted, cipher.final()]);

  return Buffer.concat([iv, test]).toString('base64');
};

export const decrypt = cipherText => {
  const buf = Buffer.from(cipherText, 'base64');
  const iv = buf.slice(0, generalConfig.cryptoIVSize);
  const cipherTextBuffer = buf.slice(generalConfig.cryptoIVSize);
  const decipher = crypto.createDecipheriv(
    generalConfig.cryptoAlgorithm,
    generalConfig.cryptoKey,
    iv,
  );
  const decrypted = decipher.update(cipherTextBuffer);

  return Buffer.concat([decrypted, decipher.final()]);
};
