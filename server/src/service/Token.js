import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

import { TokenModel } from '../models/index.js';

export const TokenService = {
  async generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {
      expiresIn: '3m',
    });

    const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH_TOKEN, {
      expiresIn: '1d',
    });

    return { accessToken, refreshToken };
  },

  async saveToken(user, refreshToken) {
    const tokenData = await TokenModel.findOne({ user });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;

      return tokenData.save();
    }

    const token = await TokenModel.create({
      user,
      refreshToken,
    });

    return token;
  },
};
