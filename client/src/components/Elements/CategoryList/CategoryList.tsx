import React, { FC } from 'react';

import Select from '@mui/material/Select';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import './index.css';

interface Props {
  handleChangeSelectedCategory: (event: SelectChangeEvent) => void;
  selectedCategory: string;
  currentListCategory: string[];
}

export const CategoryList: FC<Props> = ({
  handleChangeSelectedCategory,
  selectedCategory,
  currentListCategory,
}) => {
  return (
    <Select
      displayEmpty
      value={selectedCategory}
      onChange={handleChangeSelectedCategory}
    >
      <MenuItem disabled value="">
        Категория товара
      </MenuItem>

      {currentListCategory.map((category) => (
        <MenuItem key={category} value={category}>
          {category}
        </MenuItem>
      ))}
    </Select>
  );
};
