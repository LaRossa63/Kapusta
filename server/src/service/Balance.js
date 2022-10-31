import { BalanceModel } from '../models/index.js';
import { BalanceDTO } from '../dto/index.js';

export const BalanceService = {
  async getBalance(user) {
    let dateBalance = await BalanceModel.findOne({ user });

    if (!dateBalance) {
      dateBalance = await BalanceModel.create({ user, balance: '0' });
    }

    const balanceDTO = new BalanceDTO(dateBalance);

    return balanceDTO;
  },

  async addBalance(user, balance) {
    let dateBalance = await BalanceModel.findOne({ user });

    if (!dateBalance) {
      dateBalance = await BalanceModel.create({ user, balance });
    }

    const balanceDTO = new BalanceDTO(dateBalance);

    return balanceDTO;
  },
};
