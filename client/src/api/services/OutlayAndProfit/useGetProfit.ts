import { useQuery } from 'react-query';
import { KeyApi } from 'types/types';
import { OutlayAndProfit } from './OutlayAndProfit.service';

export const useGetProfit = () => {
  return useQuery({
    queryKey: KeyApi.PROFIT_LIST,
    queryFn: OutlayAndProfit.getProfit,
  });
};
