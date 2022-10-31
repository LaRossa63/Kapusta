import { Router } from 'express';

import { AuthMiddlewares } from '../middlewares/index.js';
import { BalanceController } from '../controllers/index.js';

export const BalanceRouter = new Router();

BalanceRouter.post('/balance', AuthMiddlewares, BalanceController.addBalance);
BalanceRouter.get('/balance', AuthMiddlewares, BalanceController.getBalance);
