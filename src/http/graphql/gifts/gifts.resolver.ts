import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import {GiftsRepository, UsersRepository} from 'src/repositories';

import {BuyerGiftInput, Gift, GiftInput} from './gifts.schema';
import {User} from '../users';

@Resolver(Gift)
export class GiftsResolver {
  constructor(
    private readonly giftsRepository: GiftsRepository,
    private readonly usersRepository: UsersRepository
  ) {
    this.giftsRepository = new GiftsRepository();
    this.usersRepository = new UsersRepository();
  }

  @Query(() => [Gift])
  gifts(): Promise<Gift[]> {
    return this.giftsRepository.findAll();
  }

  @Query(() => Gift)
  gift(@Arg('id') id: string): Promise<Gift> {
    return this.giftsRepository.findOneById(id);
  }

  @Mutation(() => Gift)
  addGift(@Arg('gift') gift: GiftInput): Promise<Gift> {
    return this.giftsRepository.create(gift);
  }

  @Mutation(() => Gift)
  addBuyer(@Arg('buyer') {giftId, buyerEmail}: BuyerGiftInput): Promise<Gift> {
    return this.giftsRepository.addBuyer(giftId, buyerEmail);
  }

  @Mutation(() => Gift)
  removeBuyer(
    @Arg('buyer') {giftId, buyerEmail}: BuyerGiftInput
  ): Promise<Gift> {
    return this.giftsRepository.removeBuyer(giftId, buyerEmail);
  }

  @FieldResolver(() => [User])
  buyers(@Root() gift: Gift): Promise<User[]> {
    return this.usersRepository.findByEmailList(gift.buyersEmails);
  }
}
