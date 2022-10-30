import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material';
import {
  AppRoutes,
  KeyApi,
  ResponseListCategoryApi,
  Category,
} from 'types/types';
import { queryClient } from 'api';

// const listCategoriesOutlay = [
//   'Транспорт',
//   'Продукты',
//   'Здоровье',
//   'Алкоголь',
//   'Развлечения',
//   'Всё для дома',
//   'Техника',
//   'Коммуналка, связь',
//   'Спорт, хобби',
//   'Образование',
//   'Прочее',
// ];

// const listCategoriesProfit = ['ЗП', 'Доп. ЗП'];

export const useHandleCreateListItem = () => {
  const [descriptionText, setDescriptionText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [amountText, setAmountText] = useState('');

  const [listCategoriesOutlay, setListCategoriesOutlay] = useState<Category[]>(
    []
  );
  const [listCategoriesProfit, setListCategoriesProfit] = useState<Category[]>(
    []
  );
  const [currentListCategory, setCurrentListCategory] = useState<Category[]>(
    []
  );

  const { pathname } = useLocation();

  const isOutlay = pathname === AppRoutes.OUTLAY;
  const isProfit = pathname === AppRoutes.PROFIT;

  useEffect(() => {
    const listCategory = queryClient.getQueryData(
      KeyApi.CATEGORY_LIST
    ) as ResponseListCategoryApi;

    setListCategoriesOutlay(listCategory.outlay);
    setListCategoriesProfit(listCategory.profit);
  }, []);

  useEffect(() => {
    if (isOutlay) {
      handleClearInput();
      setCurrentListCategory(listCategoriesOutlay);
      return;
    }

    if (isProfit) {
      handleClearInput();
      setCurrentListCategory(listCategoriesProfit);
      return;
    }
  }, [
    pathname,
    isOutlay,
    isProfit,
    listCategoriesOutlay,
    listCategoriesProfit,
  ]);

  const handleChangeDescriptionText = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionText(event.target.value);
  };

  const handleChangeSelectedCategory = (event: SelectChangeEvent<any>) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountText(event.target.value);
  };

  const handleCreate = () => {
    console.log(`${descriptionText} | ${selectedCategory} |${amountText} `);

    handleClearInput();
  };

  const handleClearInput = () => {
    setDescriptionText('');
    setSelectedCategory('');
    setAmountText('');
  };

  return {
    handleChangeDescriptionText,
    handleChangeSelectedCategory,
    handleChangeAmount,
    handleCreate,
    handleClearInput,
    descriptionText,
    selectedCategory,
    amountText,
    currentListCategory,
  };
};
