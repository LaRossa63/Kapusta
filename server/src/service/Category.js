import {
  listCategoriesModel,
  OutlayModel,
  ProfitModel,
} from '../models/index.js';

import { ApiError } from '../exceptions/index.js';
import { GetOutlayAndProfitDTO } from '../dto/index.js';

export const CategoryService = {
  async getListCategory() {
    const category = await listCategoriesModel.find();

    return category[0];
  },

  async getOutlayById(categoryId, user) {
    console.log(categoryId);

    if (!categoryId) {
      throw ApiError.BadRequest('нужно указать category id');
    }

    const categoryDate = await OutlayModel.find({ categoryId, user });
    const categoryDTO = new GetOutlayAndProfitDTO(categoryDate);
    return categoryDTO.array;
  },

  async getProfitById(categoryId, user) {
    console.log(categoryId);

    if (!categoryId) {
      throw ApiError.BadRequest('нужно указать category id');
    }

    const categoryDate = await ProfitModel.find({ categoryId, user });
    const categoryDTO = new GetOutlayAndProfitDTO(categoryDate);

    return categoryDTO.array;
  },
};
