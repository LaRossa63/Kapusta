import { KeyApi, ResponseOutlayAndProfitApi } from 'types/types';

import { queryClient } from 'api/Axios';
import { useMutation } from 'react-query';
import { OutlayAndProfit } from './OutlayAndProfit.service';

export const useAddOutlay = () => {
  return useMutation({
    onMutate: (newOutlay) => {
      queryClient.cancelQueries(KeyApi.OUTLAY_LIST);

      const oldOutlay = queryClient.getQueryData(
        KeyApi.OUTLAY_LIST
      ) as ResponseOutlayAndProfitApi[];

      queryClient.setQueryData(KeyApi.OUTLAY_LIST, [...oldOutlay, newOutlay]);

      return oldOutlay;
    },

    onSuccess: (newOutlay, value, oldOutlay) => {
      if (!oldOutlay) {
        queryClient.setQueryData(KeyApi.OUTLAY_LIST, newOutlay);
        return;
      }

      queryClient.setQueryData(KeyApi.OUTLAY_LIST, [...oldOutlay, newOutlay]);
    },

    onError: (error, value, oldOutlay) => {
      queryClient.setQueryData(KeyApi.OUTLAY_LIST, oldOutlay);
    },

    mutationFn: OutlayAndProfit.addOutlay,
  });
};
