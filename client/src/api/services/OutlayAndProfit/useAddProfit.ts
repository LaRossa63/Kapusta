import { queryClient } from 'api/Axios';
import { useMutation } from 'react-query';
import { OutlayAndProfit } from './OutlayAndProfit.service';
import { KeyApi, ResponseOutlayAndProfitApi } from 'types/types';

export const useAddProfit = () => {
  return useMutation({
    onMutate: (newOutlay) => {
      queryClient.cancelQueries(KeyApi.PROFIT_LIST);

      const oldOutlay = queryClient.getQueryData(
        KeyApi.PROFIT_LIST
      ) as ResponseOutlayAndProfitApi[];

      queryClient.setQueryData(KeyApi.PROFIT_LIST, [...oldOutlay, newOutlay]);

      return oldOutlay;
    },

    onSuccess: (newOutlay, value, oldOutlay) => {
      if (!oldOutlay) {
        queryClient.setQueryData(KeyApi.PROFIT_LIST, newOutlay);
        return;
      }

      queryClient.setQueryData(KeyApi.PROFIT_LIST, [...oldOutlay, newOutlay]);
    },

    onError: (error, value, oldOutlay) => {
      queryClient.setQueryData(KeyApi.PROFIT_LIST, oldOutlay);
    },

    mutationFn: OutlayAndProfit.addProfit,
  });
};
