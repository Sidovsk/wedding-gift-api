import 'reflect-metadata';
import {buildSchema} from 'type-graphql';

import {UsersResolver} from './users';
import {GiftsResolver} from './gifts';
import {graphqlHTTP} from 'express-graphql';

export const createGraphqlApp = async () => {
  const schema = await buildSchema({
    resolvers: [UsersResolver, GiftsResolver],
    emitSchemaFile: true,
  });

  return graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== 'production',
  });
};
