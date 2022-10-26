import React from 'react';
import styled from 'styled-components';

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { DeleteIcon } from 'images';
import './index.css';

const Container = styled.div`
  margin-top: 48px;
`;

const lists = [
  {
    id: 0,
    data: '24.10.2022',
    description: 'Поездка в метро',
    category: 'Транспорт',
    wastes: '-30.00 ₽',
  },
  {
    id: 1,
    data: 'data',
    description: 'description',
    category: 'category',
    wastes: 'wastes',
  },
  {
    id: 2,
    data: 'data',
    description: 'description',
    category: 'category',
    wastes: 'wastes',
  },
  {
    id: 3,
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
  {
    id: 4,
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
  {
    id: 5,
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
  {
    id: 6,
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
  {
    id: 7,
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
  {
    id: 8,
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
];

const TableHeadStyled = styled(TableHead)`
  & .MuiTableCell-root {
    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;
    text-transform: uppercase;

    height: 38px;

    padding: 10px 0;
    padding-left: 20px;

    color: ${(props) => props.theme.font.color.main};
    background-color: #f5f6fb;
    border: none;
  }
`;

const TableCellStyled = styled(TableCell)`
  &.MuiTableCell-root {
    width: 168px;

    font-size: ${(props) => props.theme.font.size.normal};

    color: #52555f;
    border-top: 2px solid #f5f6fb;
    border-bottom: 2px solid #f5f6fb;
  }
`;

const TableCellLastStyled = styled(TableCellStyled)`
  &.MuiTableCell-root {
    height: 54px;

    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.04em;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: red;
  }
`;

export const TableList = () => {
  return (
    <Container>
      <TableContainer
        component={Paper}
        className="Scroll"
        sx={{
          maxWidth: '624px',
          maxHeight: '344px',

          boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
          borderLeft: '2px solid #F5F6FB',
          borderRight: '6px solid #F5F6FB',
          borderBottom: '4px solid #F5F6FB',
          borderRadius: '16px 16px 0 0',
        }}
      >
        <Table stickyHeader>
          <TableHeadStyled>
            <TableRow>
              <TableCell>дата</TableCell>
              <TableCell>описание</TableCell>
              <TableCell>категория</TableCell>
              <TableCell>сумма</TableCell>
            </TableRow>
          </TableHeadStyled>

          <TableBody>
            {lists.map((list) => (
              <TableRow key={list.id}>
                <TableCellStyled>{list.data}</TableCellStyled>
                <TableCellStyled>{list.description}</TableCellStyled>
                <TableCellStyled>{list.category}</TableCellStyled>
                <TableCellLastStyled>
                  {list.wastes} {list.wastes && <DeleteIcon cursor="pointer" />}
                </TableCellLastStyled>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
