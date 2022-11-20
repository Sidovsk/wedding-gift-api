import {Field, InputType, ObjectType} from 'type-graphql';

@ObjectType()
export class User {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class UserInput {
  @Field()
  name: string;

  @Field()
  email: string;
}
