import express from 'express';
import jwt from 'jsonwebtoken';
import DiscordOAuth2 from 'discord-oauth2';

const oauth = new DiscordOAuth2();

export const app = express();

const exchangeCodeForUser = async (code) => {
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

  const signedUser = await jwt.sign(user, process.env.JWT_SECRET, {
    algorithm: 'RS256',
  });

  res.cookie('jwt', signedUser, { maxAge: 900000, httpOnly: true });
  res.redirect(process.env.REDIRECT_URL);
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});
