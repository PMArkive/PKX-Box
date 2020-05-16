import express from 'express';
import jwt from 'jsonwebtoken';
import DiscordOAuth2 from 'discord-oauth2';
import { upsertDiscordUser } from './services/firestore';

const oauth = new DiscordOAuth2();

export const app = express();

const jwtExpirationHours = parseInt(process.env.JWT_EXPIRATION_HOURS);

const exchangeCodeForUser = async code => {
  const { access_token } = await oauth.tokenRequest({
    code,
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    scope: process.env.DISCORD_SCOPE,
    grantType: process.env.DISCORD_GRANT_TYPE,
    redirectUri: process.env.DISCORD_REDIRECT_URI,
  });
  return oauth.getUser(access_token);
};

app.get('/discord', async (req, res) => {
  const { code } = req.query;
  const user = await exchangeCodeForUser(code);

  const signedUser = await jwt.sign(
    user,
    process.env.JWT_SECRET.replace(/\\n/g, '\n'),
    {
      algorithm: 'RS256',
      expiresIn: `${jwtExpirationHours}h`,
    },
  );

  const expirationTime = new Date(Date.now());
  expirationTime.setHours(expirationTime.getHours() + jwtExpirationHours);

  res.cookie('jwt', signedUser, {
    expires: expirationTime,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
  res.redirect(process.env.REDIRECT_URL);

  await upsertDiscordUser(user);
});

app.post('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.send('Success!');
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});
