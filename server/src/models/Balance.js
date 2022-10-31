import { Schema, model } from 'mongoose';

const BalanceSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  balance: { type: String, required: true },
});

export const BalanceModel = model('Balance', BalanceSchema);
