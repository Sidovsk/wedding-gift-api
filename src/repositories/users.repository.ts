import {UserModel} from '../database/mongoose/models/users.model';

type UserObj = {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

type UserCreateInput = {
  name: string;
  email: string;
};

export class UsersRepository {
  async create(user: UserCreateInput): Promise<UserObj> {
    const UserDoc = await UserModel.create(user);
    return UserDoc.toObject();
  }

  async findByEmailList(emails: string[]): Promise<UserObj[]> {
    return UserModel.find({
      email: {$in: emails},
    }).lean();
  }

  async findOneByEmail(email: string): Promise<UserObj> {
    return UserModel.findOne({email}).lean();
  }
}
