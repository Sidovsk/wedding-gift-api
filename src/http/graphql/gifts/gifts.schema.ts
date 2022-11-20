import {Field, InputType, ObjectType} from 'type-graphql';
import {User} from '../users';

@ObjectType()
export class Gift {
  @Field()
  _id?: string;
  @Field()
  name?: string;
  @Field({nullable: true})
  description?: string;
  @Field()
  price?: number;
  @Field()
  imageURL?: string;
  @Field()
  link?: string;
  @Field(() => [String])
  buyersEmails?: string[];
  @Field(() => [User], {nullable: true})
  buyers?: User[];
}

@InputType()
export class GiftInput {
  @Field()
  name: string;
  @Field({nullable: true})
  description?: string;
  @Field()
  price: number;
  @Field()
  imageURL: string;
  @Field()
  link: string;
}

@InputType()
export class BuyerGiftInput {
  @Field()
  giftId: string;
  @Field()
  buyerEmail: string;
}
