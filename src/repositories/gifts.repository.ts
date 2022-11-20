import {GiftModel} from '../database/mongoose/models/gifts.model';

type GiftObj = {
  _id: string;
  name: string;
  description?: string;
  price: number;
  imageURL: string;
  link: string;
  buyersEmails: string[];
};

type GiftCreateInput = {
  name: string;
  description?: string;
  price: number;
  imageURL: string;
  link: string;
};

export class GiftsRepository {
  async create(gift: GiftCreateInput): Promise<GiftObj> {
    const giftDoc = await GiftModel.create(gift);
    return giftDoc.toObject();
  }

  async findAll(): Promise<GiftObj[]> {
    return GiftModel.find().lean();
  }

  async findOneById(id: string): Promise<GiftObj> {
    return GiftModel.findById(id).lean();
  }

  async addBuyer(giftId: string, buyerEmail: string): Promise<GiftObj> {
    return GiftModel.updateOne(
      {_id: giftId},
      {$push: {buyersEmails: buyerEmail}}
    ).lean();
  }

  async removeBuyer(giftId: string, buyerEmail: string): Promise<GiftObj> {
    return GiftModel.updateOne(
      {_id: giftId},
      {$pull: {buyersEmails: buyerEmail}}
    ).lean();
  }
}
