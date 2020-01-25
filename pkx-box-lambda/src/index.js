import express from 'express';
import cookieParser from 'cookie-parser';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/schema';
import { createContext } from './utils/create-context';

export const app = express();

app.use(cookieParser());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
});

server.applyMiddleware({ app, path: '/graphql' });

app.get('/', (req, res) => {
  res.send('Hello world!');
});
