import {connect} from './connector';

export const setupDatabase = async () => {
  await connect();
};
