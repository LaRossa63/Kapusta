import { useMutation } from 'react-query';
import { OutlayAndProfit } from './OutlayAndProfit.service';

export const useGetBalance = () => {
  return useMutation({
    //  onMutate: (id) => {

    //    const oldValue = queryClient.getQueryData(
    //      KeyApi.PROFIT_LIST
    //    ) as ResponseOutlayAndProfitApi[];

    //    queryClient.setQueryData(
    //      KeyApi.PROFIT_LIST,
    //      oldValue.filter((element) => element.id !== id)
    //    );

    //    return oldValue;
    //  },

    //  onError: (error, value, oldValue) => {
    //    queryClient.setQueryData(KeyApi.PROFIT_LIST, oldValue);
    //  },

    mutationFn: OutlayAndProfit.getBalance,
  });
};
