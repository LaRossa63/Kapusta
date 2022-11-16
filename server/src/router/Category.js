import { Router } from 'express';

import { AuthMiddlewares } from '../middlewares/index.js';
import { CategoryController } from '../controllers/index.js';

export const CategoryRouter = new Router();

CategoryRouter.get(
  '/category_list',
  AuthMiddlewares,
  CategoryController.getListCategory
);

CategoryRouter.get(
  '/outlay_by_id',
  AuthMiddlewares,
  CategoryController.getOutlayById
);

CategoryRouter.get(
  '/profit_by_id',
  AuthMiddlewares,
  CategoryController.getProfitById
);
