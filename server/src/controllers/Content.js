import * as dotenv from 'dotenv';
dotenv.config();
import { ContentService } from '../service/index.js';

export const ContentController = {
  async getListCategory(req, res, next) {
    try {
      const response = await ContentService.getListCategory();
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};
