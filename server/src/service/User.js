import bcrypt from 'bcrypt';
import { v4 } from 'uuid';

import { UserModel } from '../models/index.js';
import { UserDto } from '../dto/index.js';
import { MailService, TokenService } from './index.js';
import { ApiError } from '../exceptions/index.js';

export const UserService = {
  async registration(email, nickName, password) {
    const candidateEmail = await UserModel.findOne({ email });
    if (candidateEmail) {
      throw ApiError.BadRequest('Данная почта уже используется');
    }

    const candidateNickMan = await UserModel.findOne({ nickName });
    if (candidateNickMan) {
      throw ApiError.BadRequest('Данное имя уже используется');
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = v4();

    await MailService.sendActivationMail(email, activationLink);

    const newUser = await UserModel.create({
      email,
      nickName,
      password: hashPassword,
    });
    const userDTO = new UserDto(newUser);
    const tokens = await TokenService.generateTokens({ ...userDTO });

    await TokenService.saveToken(userDTO.id, tokens.refreshToken);

    return { user: userDTO, ...tokens };
  },

  async login(email, password) {
    const candidate = await UserModel.findOne({ email });

    if (!candidate) {
      throw ApiError.BadRequest('Пользователь с таким email нету!');
    }

    const isPasswordValid = await bcrypt.compare(password, candidate.password);

    if (!isPasswordValid) {
      throw ApiError.BadRequest('Неверный пароль');
    }

    const userDTO = new UserDto(candidate);
    const tokens = await TokenService.generateTokens({ ...userDTO });

    await TokenService.saveToken(userDTO.id, tokens.refreshToken);

    return { user: userDTO, ...tokens };
  },

  async logout(refreshToken) {
    const token = await TokenService.removeToken(refreshToken);

    return token;
  },

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });

    if (!user) {
      throw ApiError.BadRequest('пользователь не найдем!');
    }

    user.isActivated = true;
    await user.save();
  },

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = await TokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await TokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = await TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return { user: userDto, ...tokens };
  },

  async getAllUsers() {
    const users = await UserModel.find();

    return users;
  },
};
