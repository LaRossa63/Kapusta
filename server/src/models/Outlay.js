import { Schema, model } from 'mongoose';

const OutlaySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },

  data: { type: String, required: true },
  description: { type: String, required: true },
  categoryId: { type: String, required: true },
  categoryText: { type: String, required: true },
  amount: { type: String, required: true },
});

export const OutlayModel = model('Outlay', OutlaySchema);
