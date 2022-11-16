import { useEffect, useState } from 'react';

import { queryClient } from 'api';
import { KeyApi, ResponseOutlayAndProfitApi } from 'types/types';

export const useOutlayAndProfitTotal = () => {
  const [totalOutlay, setTotalOutlay] = useState<number>(0);
  const [totalProfit, setTotalProfit] = useState<number>(0);

  useEffect(() => {
    const total_outlay = queryClient.getQueryData(
      KeyApi.OUTLAY_LIST
    ) as ResponseOutlayAndProfitApi[];

    const total_profit = queryClient.getQueryData(
      KeyApi.PROFIT_LIST
    ) as ResponseOutlayAndProfitApi[];

    if (!total_outlay || !total_profit) {
      return;
    }

    const reduce_outlay = total_outlay.reduce((total: number, element) => {
      return total + Number(element.amount);
    }, 0);

    const reduce_profit = total_profit.reduce((total: number, element) => {
      return total + Number(element.amount);
    }, 0);

    setTotalOutlay(reduce_outlay);
    setTotalProfit(reduce_profit);
  }, []);

  return { totalOutlay, totalProfit };
};
