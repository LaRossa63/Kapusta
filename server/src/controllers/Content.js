import * as dotenv from 'dotenv';
dotenv.config();
import { ContentService } from '../service/index.js';

export const ContentController = {
  async addOutlay(req, res, next) {
    try {
      const { data, description, categoryId, categoryText, amount } = req.body;
      const { id: user } = req.user;

      const response = await ContentService.addOutlay(
        user,
        data,
        description,
        categoryId,
        categoryText,
        amount
      );

      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async getOutlay(req, res, next) {
    try {
      const { id: user } = req.user;

      const response = await ContentService.getOutlay(user);

      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async deleteOutlay(req, res, next) {
    try {
      const { id: user } = req.user;
      const { id } = req.params;

      const response = await ContentService.deleteOutlay(user, id);

      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async addProfit(req, res, next) {
    try {
      const { data, description, categoryId, categoryText, amount } = req.body;
      const { id: user } = req.user;

      const response = await ContentService.addProfit(
        user,
        data,
        description,
        categoryId,
        categoryText,
        amount
      );

      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async getProfit(req, res, next) {
    try {
      const { id: user } = req.user;
      const response = await ContentService.getProfit(user);

      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async deleteProfit(req, res, next) {
    try {
      const { id: user } = req.user;
      const { id } = req.params;

      const response = await ContentService.deleteProfit(user, id);

      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};
