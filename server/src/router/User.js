import { Router } from 'express';

import { UserController } from '../controllers/index.js';

export const UserRouter = new Router();

UserRouter.post('/registration', UserController.registration);
UserRouter.post('/login', UserController.login);
UserRouter.post('/logout', UserController.logout);
UserRouter.get('/activate/:link', UserController.activate);
UserRouter.get('/refresh', UserController.refresh);
