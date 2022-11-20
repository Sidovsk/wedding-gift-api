import mongoose from 'mongoose';

export const connect = (): Promise<typeof mongoose> => {
  return mongoose.connect(process.env.MONGODB_URL);
};

export const disconnect = (): Promise<void> => {
  return mongoose.disconnect();
};
