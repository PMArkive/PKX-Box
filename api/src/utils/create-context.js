import jwt from 'jsonwebtoken';
import { generalConfig } from '../config/general';

export const createContext = async ({ req }) => {
  const { jwt: token } = req.cookies || {};

  if (token) {
    const user = await jwt.verify(token, generalConfig.jwtSecret, {
      algorithms: ['RS256'],
    });

    if (user.id && user.username)
      return {
        user: {
          ...user,
          discordUsername: user.username,
          discordDiscriminator: user.discriminator,
        },
      };
  }
};
