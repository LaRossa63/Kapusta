import { useMutation } from 'react-query';
import { OutlayAndProfit } from './OutlayAndProfit.service';

export const useAddBalance = () => {
  return useMutation({
    mutationFn: OutlayAndProfit.addBalance,
  });
};
