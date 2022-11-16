import { useMutation } from 'react-query';
import { OutlayAndProfit } from './OutlayAndProfit.service';

export const useGetProfitById = () => {
  return useMutation({
    mutationFn: OutlayAndProfit.getProfitById,
  });
};
