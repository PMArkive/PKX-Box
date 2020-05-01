import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createComplexityLimitRule } from 'graphql-validation-complexity';
import { typeDefs, resolvers } from './graphql/schema';
import { createContext } from './utils/create-context';
import { FireStoreDataSource } from './graphql/datasource';
import { generalConfig } from './config/general';
import { LoginCheckDirective } from './graphql/directives';

export const app = express();

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (generalConfig.corsOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback('Not allowed by CORS');
    }
  },
};

app.use(cors(corsOptions));

app.use(cookieParser());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    loginCheck: LoginCheckDirective,
  },
  dataSources: () => ({
    firestore: new FireStoreDataSource(),
  }),
  context: createContext,
  validationRules: [
    createComplexityLimitRule(generalConfig.maxQueryComplexityCost, {
      objectCost: generalConfig.objectQueryComplexityCost,
    }),
  ],
});

server.applyMiddleware({ app, path: '/graphql', cors: false });

app.use('*', (req, res) => res.send('Health check'));
