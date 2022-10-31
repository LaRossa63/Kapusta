import { useMutation } from 'react-query';
import { queryClient } from 'api/Axios';
import { KeyApi, ResponseOutlayAndProfitApi } from 'types/types';
import { OutlayAndProfit } from './OutlayAndProfit.service';

export const useDeleteOutlay = () => {
  return useMutation({
    onMutate: (id) => {
      queryClient.cancelQueries(KeyApi.OUTLAY_LIST);

      const oldValue = queryClient.getQueryData(
        KeyApi.OUTLAY_LIST
      ) as ResponseOutlayAndProfitApi[];

      queryClient.setQueryData(
        KeyApi.OUTLAY_LIST,
        oldValue.filter((element) => element.id !== id)
      );

      return oldValue;
    },

    onError: (error, value, oldValue) => {
      queryClient.setQueryData(KeyApi.OUTLAY_LIST, oldValue);
    },

    mutationFn: OutlayAndProfit.deleteOutlay,
  });
};
