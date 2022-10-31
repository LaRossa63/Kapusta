import { BalanceService } from '../service/index.js';

export const BalanceController = {
  async getBalance(req, res, next) {
    try {
      const { id: user } = req.user;

      const dateBalance = await BalanceService.getBalance(user);

      return res.json(dateBalance);
    } catch (error) {
      next(error);
    }
  },

  async addBalance(req, res, next) {
    try {
      const { id: user } = req.user;
      const { balance } = req.body;

      const dateBalance = await BalanceService.addBalance(user, balance);

      return res.json(dateBalance);
    } catch (error) {
      next(error);
    }
  },
};
