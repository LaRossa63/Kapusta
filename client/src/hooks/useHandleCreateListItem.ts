import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useGetListCategory } from './useGetListCategory';
import { queryClient } from 'api';
import { Category, KeyApp, OutlayAndProfitDTO } from 'types/types';
import { useCurrentPage } from './useCurrentPage';
import { useAddOutlay, useAddProfit } from 'api/services/OutlayAndProfit';
import { nanoid } from 'nanoid';

interface ValueControls {
  descriptionText: string;
  selectedCategory: Category;
  amountText: string;
}

export const useHandleCreateListItem = () => {
  const { pathname } = useLocation();
  const [descriptionText, setDescriptionText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: '',
    text: '',
  });
  const [amountText, setAmountText] = useState('');
  const { currentListCategory } = useGetListCategory();
  const {
    isOpenOutlay,
    isOpenProfit,
    isOpenMobileCreateOutlay,
    isOpenMobileCreateProfit,
  } = useCurrentPage();
  const { mutate: mutateAddOutlay } = useAddOutlay();
  const { mutate: mutateAddProfit } = useAddProfit();

  useEffect(() => {
    const valueControls = queryClient.getQueryData([
      KeyApp.CONTROLS_VALUE,
      pathname,
    ]) as ValueControls;

    if (!valueControls) {
      handleClearInput();
      return;
    }

    setDescriptionText(valueControls.descriptionText);
    setSelectedCategory(valueControls.selectedCategory);
    setAmountText(valueControls.amountText);
  }, [pathname]);

  useEffect(() => {
    const valueControls: ValueControls = {
      descriptionText,
      selectedCategory,
      amountText,
    };

    queryClient.setQueryData([KeyApp.CONTROLS_VALUE, pathname], valueControls);
  }, [amountText, descriptionText, pathname, selectedCategory]);

  const handleChangeDescriptionText = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionText(event.target.value);
  };

  const handleChangeSelectedCategory = (value: Category) => {
    setSelectedCategory(value);
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountText(event.target.value);
  };

  const handleCreate = () => {
    const body: OutlayAndProfitDTO = {
      id: nanoid(),
      data: '31.10.2022',
      description: descriptionText,
      categoryId: selectedCategory.id,
      categoryText: selectedCategory.text,
      amount: amountText,
    };

    handleClearInput();

    if (isOpenOutlay() || isOpenMobileCreateOutlay()) {
      mutateAddOutlay(body);
      return;
    }

    if (isOpenProfit() || isOpenMobileCreateProfit()) {
      mutateAddProfit(body);
      return;
    }
  };

  function handleClearInput() {
    setDescriptionText('');
    setSelectedCategory({ id: '', text: '' });
    setAmountText('');
  }

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
