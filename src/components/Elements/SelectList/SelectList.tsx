import React, { FC } from 'react';

import Select from '@mui/material/Select';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import './index.css';

interface Props {
  handleChangeSelectedCategory: (event: SelectChangeEvent) => void;
  selectedCategory: string;
}

const listCategories = [
  'Транспорт',
  'Продукты',
  'Здоровье',
  'Алкоголь',
  'Развлечения',
  'Всё для дома',
  'Техника',
  'Коммуналка, связь',
  'Спорт, хобби',
  'Образование',
  'Прочее',
];

export const SelectList: FC<Props> = ({
  handleChangeSelectedCategory,
  selectedCategory,
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

      {listCategories.map((category) => (
        <MenuItem key={category} value={category}>
          {category}
        </MenuItem>
      ))}
    </Select>
  );
};
