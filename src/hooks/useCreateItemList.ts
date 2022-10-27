import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

export const useCreateItemList = () => {
  const [descriptionText, setDescriptionText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [amountText, setAmountText] = useState('');

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
  };
};
