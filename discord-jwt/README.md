# Discord JWT Lambda

## Purpose

This lambda allows exchanging a Discord OAuth token for a JWT cookie.

By putting this behind an API Gateway with other services, any request made to any service will have the cookie sent along with the request. This enables any service to know who sent the request and potential permissions they might have.

## Usage

1. Setup this application as an [AWS Lambda](https://aws.amazon.com/lambda/) node application
1. Setup an [AWS API Gateway](https://aws.amazon.com/api-gateway/) with a route to trigger the Discord JWT lambda
1. Create a Discord application on the [developer application page](https://discordapp.com/developers/applications/)
1. Set the URL to trigger the Lambda as the redirect URL on the new Discord application
1. Set the scope and redirect URL settings on the new application
1. Get the OAuth2 client Id and secret for the new application
1. Set the Lambda's environment variables using the same settings as the Discord application
1. Use Discord's OAuth2 URL generator to get a URL users can use to authenticate with Discord

## Environment Variables

- DISCORD_CLIENT_ID - Discord client Id
- DISCORD_CLIENT_SECRET - Discord client secret
- DISCORD_SCOPE - Discord scope
- DISCORD_GRANT_TYPE - Discord grant type - for this project, it should most likely be `authorization_code`
- DISCORD_REDIRECT_URI - Discord redirect uri
- REDIRECT_URL - redirect url after the user has successfully logged in
- JWT_SECRET - secret or key to sign the JWT
- ADMIN_IDS - a quick Admin hack which should be removed in the future. It holds the comma separated Discord user Ids of admins for a platform

## Primary tools used

- [Express](https://expressjs.com/) - server library that allows extensions through middleware
- [discord-oauth2](https://github.com/reboxer/discord-oauth2) - a nice Discord OAuth2 wrapper
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JWT library
- [serverless-http](https://github.com/dougmoscrop/serverless-http) - translation layer between Lambda and Express
- [Babel](https://babeljs.io/) - transpiler for newer JavaScript syntax
- [ESLint](https://eslint.org/) - linter
