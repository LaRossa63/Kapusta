import { CategoryService } from '../service/index.js';

export const CategoryController = {
  async getListCategory(req, res, next) {
    try {
      const response = await CategoryService.getListCategory();
      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async getOutlayById(req, res, next) {
    try {
      const categoryId = req.query.category;
      const { id: user } = req.user;

      const dateCategory = await CategoryService.getOutlayById(
        categoryId,
        user
      );

      return res.json(dateCategory);
    } catch (error) {
      next(error);
    }
  },

  async getProfitById(req, res, next) {
    try {
      const categoryId = req.query.category;
      const { id: user } = req.user;

      const dateCategory = await CategoryService.getProfitById(
        categoryId,
        user
      );

      return res.json(dateCategory);
    } catch (error) {
      next(error);
    }
  },
};
