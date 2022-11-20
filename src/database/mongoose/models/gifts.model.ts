import mongoose from 'mongoose';

const GiftSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageURL: String,
  link: String,
  buyersEmails: [String],
});

export const GiftModel = mongoose.model('Gifts', GiftSchema);
