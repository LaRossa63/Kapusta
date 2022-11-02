import { useQuery } from 'react-query';
import { KeyApi } from 'types/types';
import { OutlayAndProfit } from './OutlayAndProfit.service';

export const useGetBalance = () => {
  return useQuery({
    queryKey: KeyApi.BALANCE,
    queryFn: OutlayAndProfit.getBalance,
  });
};
