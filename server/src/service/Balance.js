import { BalanceModel } from '../models/index.js';
import { BalanceDTO } from '../dto/index.js';

export const BalanceService = {
  async getBalance(user) {
    const dateBalance = await BalanceModel.findOne({ user });

    console.log(dateBalance);

    if (!dateBalance) {
      const currentBalance = await BalanceModel.create({ user, balance: '0' });

      return new BalanceDTO(currentBalance);
    }

    const balanceDTO = new BalanceDTO(dateBalance);

    return balanceDTO;
  },

  async addBalance(user, balance) {
    const dateBalance = await BalanceModel.findOne({ user });

    if (!dateBalance) {
      const currentBalance = await BalanceModel.create({ user, balance });
      return new BalanceDTO(currentBalance);
    }

    dateBalance.balance = balance;
    await dateBalance.save();

    return new BalanceDTO(dateBalance);
  },
};
