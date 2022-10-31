import {
  listCategoriesModel,
  OutlayModel,
  ProfitModel,
} from '../models/index.js';
import { ApiError } from '../exceptions/index.js';
import { GetOutlayAndProfitDTO, AddOutlayAndProfitDTO } from '../dto/index.js';

export const ContentService = {
  async getListCategory() {
    const category = await listCategoriesModel.find();

    return category[0];
  },

  async addOutlay(user, data, description, category, amount) {
    const dateOutlay = await OutlayModel.create({
      user,
      data,
      description,
      category,
      amount,
    });
    const ProfitDTO = new AddOutlayAndProfitDTO(dateOutlay);

    return ProfitDTO;
  },

  async getOutlay(user) {
    const dateOutlay = await OutlayModel.find({ user });
    const OutlayDTO = new GetOutlayAndProfitDTO(dateOutlay);

    return OutlayDTO.array;
  },

  async deleteOutlay(user, _id) {
    const dateOutlay = await OutlayModel.findByIdAndDelete({ user, _id });

    console.log('Outlay');
    console.log(dateOutlay);
    console.log(user, _id);

    if (!dateOutlay) {
      throw ApiError.BadRequest('id не найден!');
    }

    return dateOutlay;
  },

  async addProfit(user, data, description, category, amount) {
    const dateProfit = await ProfitModel.create({
      user,
      data,
      description,
      category,
      amount,
    });

    const ProfitDTO = new AddOutlayAndProfitDTO(dateProfit);

    return ProfitDTO;
  },

  async getProfit(user) {
    const dateProfit = await ProfitModel.find({ user });
    const ProfitDTO = new GetOutlayAndProfitDTO(dateProfit);

    return ProfitDTO.array;
  },

  async deleteProfit(user, _id) {
    const dateOutlay = await ProfitModel.findByIdAndDelete({ user, _id });

    if (!dateOutlay) {
      throw ApiError.BadRequest('id не найден!');
    }

    return dateOutlay;
  },
};
