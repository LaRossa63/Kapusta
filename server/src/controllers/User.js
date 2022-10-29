import { UserService } from '../service/index.js';

export const UserController = {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;

      const response = await UserService.registration(email, password);
      res.cookie('refreshToken', response.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.json(response);
    } catch (error) {
      res.status(500).json(error);
    }
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

  async activate(req, res, next) {
    try {
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
