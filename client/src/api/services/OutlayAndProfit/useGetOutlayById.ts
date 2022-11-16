import { useMutation } from 'react-query';
import { OutlayAndProfit } from './OutlayAndProfit.service';

export const useGetOutlayById = () => {
  return useMutation({
    mutationFn: OutlayAndProfit.getOutlayById,
  });
};
