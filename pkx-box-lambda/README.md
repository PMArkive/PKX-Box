# PKX-Box Lambda

## Purpose

This is the API for PKX-Box which provides CRUD operations for Pokemon.

## Environment Variables

- GOOGLE_APPLICATION_CREDENTIALS - a file location with the service account JSON. In the future, environment variables with the service account info should be provided instead.
- FIRESTORE_URL - the url to the [Firestore](https://firebase.google.com/docs/firestore) DB
- JWT_SECRET - the secret or key used to verify the user JWT
- PKX_VERIFY_PEM - the PEM used to verify a PKX signed by the PKHeX.Core Lambda

## Primary tools used

- [Express](https://expressjs.com/) - server library that allows extensions through middleware
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL layer of the API
- [serverless-http](https://github.com/dougmoscrop/serverless-http) - translation layer between Lambda and Express
- [Babel](https://babeljs.io/) - transpiler for newer JavaScript syntax
- [ESLint](https://eslint.org/) - linter
