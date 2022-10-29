import bcrypt from 'bcrypt';
import { v4 } from 'uuid';

import { UserModel } from '../models/index.js';
import { UserDto } from '../dto/index.js';
import { MailService, TokenService } from './index.js';

export const UserService = {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      throw new Error('Почта занята');
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = v4();

    const newUser = await UserModel.create({ email, password: hashPassword });
    await MailService.sendActivationMail(email, activationLink);

    const userDTO = new UserDto(newUser);
    const tokens = await TokenService.generateToken({ ...userDTO });

    await TokenService.saveToken(userDTO.id, tokens.refreshToken);

    return { user: userDTO, ...tokens };
  },

  async login(req, res, next) {
    try {
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async logout(req, res, next) {
    try {
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async activate(activationLink) {
    try {
      const user = await UserModel.findOne({ activationLink });

      if (!user) {
        throw new Error('пользователь не найдем!');
      }

      user.isActivated = true;
      await user.save();
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async refresh(req, res, next) {
    try {
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};
