import React, { FC } from 'react';

import Select from '@mui/material/Select';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import './index.css';
import { Category } from 'types/types';

interface Props {
  handleChangeSelectedCategory: (value: Category) => void;
  selectedCategory: Category | null;
  currentListCategory: Category[];
}

export const CategoryList: FC<Props> = ({
  handleChangeSelectedCategory,
  selectedCategory,
  currentListCategory,
}) => {
  const temp = (event: SelectChangeEvent<any>) => {
    const value = currentListCategory.find(
      (category) => category.text === event.target.value
    );

    if (!value) {
      return;
    }

    handleChangeSelectedCategory(value);
  };

  return (
    <Select displayEmpty value={selectedCategory!.text} onChange={temp}>
      <MenuItem disabled value="">
        Категория товара
      </MenuItem>

      {currentListCategory.map((category) => (
        <MenuItem key={category.id} value={category.text}>
          {category.text}
        </MenuItem>
      ))}
    </Select>
  );
};
