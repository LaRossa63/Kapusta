import { useEffect, useState } from 'react';
import { ResponseOutlayAndProfitApi } from 'types/types';
import {
  useDeleteOutlay,
  useDeleteProfit,
  useGetOutlay,
  useGetProfit,
} from 'api/services/OutlayAndProfit';
import { useCurrentPage } from 'hooks';

export const useListOutlayAndProfit = () => {
  const [currentList, setCurrentList] = useState<
    ResponseOutlayAndProfitApi[] | undefined
  >(undefined);

  const { isOpenOutlay, isOpenProfit } = useCurrentPage();
  const { data: listsOutlay } = useGetOutlay();
  const { data: listsProfit } = useGetProfit();
  const { mutate: mutateOutlay } = useDeleteOutlay();
  const { mutate: mutateProfit } = useDeleteProfit();

  useEffect(() => {
    if (isOpenOutlay()) {
      setCurrentList(listsOutlay);
    }

    if (isOpenProfit()) {
      setCurrentList(listsProfit);
    }
  }, [listsOutlay, listsProfit, isOpenOutlay, isOpenProfit]);

  const handleClickDelete = (id: string) => {
    if (isOpenOutlay()) {
      mutateOutlay(id);
      return;
    }

    if (isOpenProfit()) {
      mutateProfit(id);
      return;
    }
  };

  return { handleClickDelete, currentList };
};
