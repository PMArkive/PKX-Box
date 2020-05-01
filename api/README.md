# PKX-Box Lambda

## Purpose

This is the PKX-Box backend API that provides CRUD operations.

## Environment Variables

- JWT_SECRET - secret or public key used to verify the user JWT
- GOOGLE_APPLICATION_CREDENTIALS - a file location with the service account JSON. In the future, environment variables with the service account info should be provided instead
- PKHEX_API_URL - url of the PKHeX API
- CRYPTO_ALGORITHM - algorithm used to encrypt data. Use `console.log(crypto.getCiphers())` to get a list of available ciphers
- CRYPTO_KEY - secret used to encrypt data. Example: Use `console.log(new Buffer(crypto.randomBytes(8)).toString('hex))`
- CRYPTO_IV_SIZE - initialization vector size. Example: 16
- COLLECTION_DELETE_BATCH_SIZE - document batch size to use when deleting collections. Example: 50
- CORS_ORIGINS - comma separated list of origins for the access-control-allow-origin cors header. Example: `http://localhost:3000,http://localhost:5000`
- MAX_QUERY_COMPLEXITY_COST - limits the max query complexity to avoid a crafted query that kills the backend. Example: 2000
- MAX_QUERY_OBJECT_COST - sets the complexity cost of an individual object. Example: 0

## Primary tools used

- [Express](https://expressjs.com/) - server library that allows extensions through middleware
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL layer of the API
- [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) - translation layer between Lambda and Express
- [Babel](https://babeljs.io/) - transpiler for newer JavaScript syntax
- [ESLint](https://eslint.org/) - linter
