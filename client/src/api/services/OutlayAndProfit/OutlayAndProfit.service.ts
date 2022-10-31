import { Axios } from 'api';
import {
  LinksApi,
  OutlayAndProfitDTO,
  ResponseOutlayAndProfitApi,
} from 'types/types';

export const OutlayAndProfit = {
  async addOutlay(body: OutlayAndProfitDTO): Promise<OutlayAndProfitDTO> {
    return Axios.post(LinksApi.OUTLAY, body);
  },

  async addProfit(body: OutlayAndProfitDTO): Promise<OutlayAndProfitDTO> {
    return Axios.post(LinksApi.PROFIT, body);
  },

  async deleteOutlay(id: string): Promise<ResponseOutlayAndProfitApi[]> {
    return Axios.delete(`${LinksApi.OUTLAY}/${id}`);
  },

  async deleteProfit(id: string): Promise<ResponseOutlayAndProfitApi[]> {
    return Axios.delete(`${LinksApi.PROFIT}/${id}`);
  },

  async getOutlay(): Promise<ResponseOutlayAndProfitApi[]> {
    return Axios.get(LinksApi.OUTLAY);
  },

  async getProfit(): Promise<ResponseOutlayAndProfitApi[]> {
    return Axios.get(LinksApi.PROFIT);
  },

  async getBalance() {
    return;
  },
};