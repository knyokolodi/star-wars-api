import { ApolloServer } from 'apollo-server';

import * as dotenv from 'dotenv';

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const res = await server.listen({ port });
    console.log(`Server running at ${res.url}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

startServer();
