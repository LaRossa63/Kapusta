import {
  listCategoriesModel,
  OutlayModel,
  ProfitModel,
} from '../models/index.js';
import { ApiError } from '../exceptions/index.js';

export const ContentService = {
  async getListCategory() {
    const category = await listCategoriesModel.find();

    return category[0];
  },

  async addOutlay(user, data, description, category, amount) {
    const response = await OutlayModel.create({
      user,
      data,
      description,
      category,
      amount,
    });

    return response;
  },

  async getOutlay(user) {
    const response = await OutlayModel.find({ user });

    return response;
  },

  async deleteOutlay(user, _id) {
    const dateOutlay = await OutlayModel.findByIdAndDelete({ user, _id });

    if (!dateOutlay) {
      throw ApiError.BadRequest('id не найден!');
    }

    return dateOutlay;
  },

  async addProfit(user, data, description, category, amount) {
    const response = await ProfitModel.create({
      user,
      data,
      description,
      category,
      amount,
    });

    return response;
  },

  async getProfit(user) {
    const response = await ProfitModel.find({ user });

    return response;
  },

  async deleteProfit(user, _id) {
    const dateOutlay = await OutlayModel.findByIdAndDelete({ user, _id });

    if (!dateOutlay) {
      throw ApiError.BadRequest('id не найден!');
    }

    return dateOutlay;
  },
};
