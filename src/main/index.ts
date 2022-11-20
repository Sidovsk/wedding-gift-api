import {setupDatabase, disconnect} from 'src/database/mongoose';
import {createGraphqlApp} from 'src/http/graphql';
import {setupServer} from 'src/http/express';

const gracefullShutdown = async (arg: any) => {
  await disconnect();
  process.exit(arg instanceof Error ? -1 : 0);
};

async function bootstrap() {
  await setupDatabase();
  const graphqlApp = await createGraphqlApp();
  await setupServer(graphqlApp);
}

bootstrap();
process.on('SIGINT', gracefullShutdown);
process.on('SIGTERM', gracefullShutdown);
