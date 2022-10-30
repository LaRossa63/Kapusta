import { Router } from 'express';
import { body } from 'express-validator';

import { UserController } from '../controllers/index.js';
import { AuthMiddlewares } from '../middlewares/index.js';

export const UserRouter = new Router();

UserRouter.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 16 }),
  UserController.registration
);
UserRouter.post('/login', UserController.login);
UserRouter.post('/logout', UserController.logout);
UserRouter.get('/activate/:link', UserController.activate);
UserRouter.get('/refresh', UserController.refresh);
UserRouter.get('/users', AuthMiddlewares, UserController.getAllUsers);
