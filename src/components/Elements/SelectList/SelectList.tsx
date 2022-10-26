import React from 'react';
import styled from 'styled-components';

import Select from '@mui/material/Select';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import './index.css';

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

export const SelectList = () => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent<any>) => {
    setCategory(event.target.value);
  };

  return (
    <Select displayEmpty value={category} onChange={handleChange}>
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
