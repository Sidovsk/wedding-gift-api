import express, {RequestHandler} from 'express';

export const setupServer = (routes: RequestHandler): void => {
  const app = express();

  app.use('/api', routes);

  app.listen(process.env.PORT);

  console.log(`Running API at ${process.env.PORT}`);
};
