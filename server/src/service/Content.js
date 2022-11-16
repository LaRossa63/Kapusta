import { OutlayModel, ProfitModel } from '../models/index.js';
import { ApiError } from '../exceptions/index.js';
import { GetOutlayAndProfitDTO, AddOutlayAndProfitDTO } from '../dto/index.js';

export const ContentService = {
  async addOutlay(user, data, description, categoryId, categoryText, amount) {
    const dateOutlay = await OutlayModel.create({
      user,
      data,
      description,
      categoryId,
      categoryText,
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

    if (!dateOutlay) {
      throw ApiError.BadRequest('id не найден!');
    }

    return dateOutlay;
  },

  async addProfit(user, data, description, categoryId, categoryText, amount) {
    const dateProfit = await ProfitModel.create({
      user,
      data,
      description,
      categoryId,
      categoryText,
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
