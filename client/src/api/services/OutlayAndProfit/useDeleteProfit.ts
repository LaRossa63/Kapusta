import { useMutation } from 'react-query';
import { queryClient } from 'api/Axios';
import { KeyApi, ResponseOutlayAndProfitApi } from 'types/types';
import { OutlayAndProfit } from './OutlayAndProfit.service';

export const useDeleteProfit = () => {
  return useMutation({
    onMutate: (id) => {
      queryClient.cancelQueries(KeyApi.PROFIT_LIST);

      const oldValue = queryClient.getQueryData(
        KeyApi.PROFIT_LIST
      ) as ResponseOutlayAndProfitApi[];

      queryClient.setQueryData(
        KeyApi.PROFIT_LIST,
        oldValue.filter((element) => element.id !== id)
      );

      return oldValue;
    },

    onError: (error, value, oldValue) => {
      queryClient.setQueryData(KeyApi.PROFIT_LIST, oldValue);
    },

    mutationFn: OutlayAndProfit.deleteProfit,
  });
};
