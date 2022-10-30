import { listCategoriesModel } from '../models/index.js';

export const ContentService = {
  async getListCategory() {
    const category = await listCategoriesModel.find();
    return category;
  },
};
