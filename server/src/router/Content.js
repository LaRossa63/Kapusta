import { Router } from 'express';

import { ContentController } from '../controllers/index.js';
import { AuthMiddlewares } from '../middlewares/index.js';

export const ContentRouter = new Router();

ContentRouter.get(
  '/category_list',
  AuthMiddlewares,
  ContentController.getListCategory
);

ContentRouter.post('/outlay', AuthMiddlewares, ContentController.addOutlay);
ContentRouter.get('/outlay', AuthMiddlewares, ContentController.getOutlay);
ContentRouter.delete(
  '/outlay/:id',
  AuthMiddlewares,
  ContentController.deleteOutlay
);

ContentRouter.post('/profit', AuthMiddlewares, ContentController.addProfit);
ContentRouter.get('/profit', AuthMiddlewares, ContentController.getProfit);
ContentRouter.delete(
  '/profit/:id',
  AuthMiddlewares,
  ContentController.deleteProfit
);

ContentRouter.post('/balance', AuthMiddlewares);
ContentRouter.get('/balance', AuthMiddlewares);
