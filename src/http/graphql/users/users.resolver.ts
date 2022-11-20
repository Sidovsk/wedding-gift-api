import {UsersRepository} from 'src/repositories';
import {Arg, Mutation, Query, Resolver} from 'type-graphql';
import {User, UserInput} from './users.schema';

@Resolver(User)
export class UsersResolver {
  constructor(private readonly usersRepository: UsersRepository) {
    this.usersRepository = new UsersRepository();
  }

  @Mutation(() => User)
  createUser(@Arg('user') user: UserInput): Promise<User> {
    return this.usersRepository.create(user);
  }

  @Query(() => User)
  user(@Arg('email') email: string): Promise<User> {
    return this.usersRepository.findOneByEmail(email);
  }
}
