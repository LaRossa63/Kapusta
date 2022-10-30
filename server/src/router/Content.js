import { Router } from 'express';

import { ContentController } from '../controllers/index.js';
import { AuthMiddlewares } from '../middlewares/index.js';

export const ContentRouter = new Router();

ContentRouter.get(
  '/category_list',
  AuthMiddlewares,
  ContentController.getListCategory
);
