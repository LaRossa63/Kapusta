import { useQuery } from 'react-query';
import { KeyApi } from 'types/types';
import { OutlayAndProfit } from './OutlayAndProfit.service';

export const useGetOutlay = () => {
  return useQuery({
    queryKey: KeyApi.OUTLAY_LIST,
    queryFn: OutlayAndProfit.getOutlay,
  });
};
