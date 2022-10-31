import { KeyApi, ResponseListCategoryApi, Category } from 'types/types';
import { queryClient } from 'api';
import { useCurrentPage } from './useCurrentPage';
import { useEffect, useState } from 'react';

export const useGetListCategory = () => {
  const { isOpenOutlay, isOpenProfit } = useCurrentPage();

  const [listCategoriesOutlay, setListCategoriesOutlay] = useState<Category[]>(
    []
  );
  const [listCategoriesProfit, setListCategoriesProfit] = useState<Category[]>(
    []
  );
  const [currentListCategory, setCurrentListCategory] = useState<Category[]>(
    []
  );

  useEffect(() => {
    const listCategory = queryClient.getQueryData(
      KeyApi.CATEGORY_LIST
    ) as ResponseListCategoryApi;

    setListCategoriesOutlay(listCategory.outlay);
    setListCategoriesProfit(listCategory.profit);
  }, []);

  useEffect(() => {
    if (isOpenOutlay()) {
      setCurrentListCategory(listCategoriesOutlay);
      return;
    }

    if (isOpenProfit()) {
      setCurrentListCategory(listCategoriesProfit);
      return;
    }
  }, [isOpenOutlay, isOpenProfit, listCategoriesOutlay, listCategoriesProfit]);

  return { currentListCategory };
};
