import jwt from 'jsonwebtoken';

export const createContext = async ({ req }) => {
  const { jwt: token } = req.cookies || {};

  if (token) {
    const user = await jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ['RS256'],
    });

    if (user.id && user.username) return { user };
  }

  throw new Error('Not Authenticated');
};
