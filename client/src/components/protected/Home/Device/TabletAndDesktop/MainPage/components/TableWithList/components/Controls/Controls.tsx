import React, { useState } from 'react';
import styled from 'styled-components';

import { Input } from '@mui/material';
import { CalculatorIcon } from 'images';
import { CategoryList, Calendar, Button } from 'components/Elements';
import { useHandleCreateListItem } from 'hooks';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    flex-wrap: nowrap;
  }
`;

const Inputs = styled.div`
  width: 480px;
  height: 44px;

  display: flex;
  align-items: center;

  padding: 10px 0;

  border: 2px solid ${(props) => props.theme.controller.input.border.active};
  border-radius: 16px 16px 16px 0px;

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    width: 578px;
  }
`;

const InputDescription = styled.input`
  width: 180px;

  padding-left: 20px;
  padding-bottom: 5px;

  font-size: ${(props) => props.theme.font.size.normal};
  color: ${(props) => props.theme.font.color.main};

  &::placeholder {
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;

    color: ${(props) => props.theme.controller.input.color.secondary};
  }
`;

const InputAmount = styled(Input)`
  &.MuiInputBase-root {
    width: 90px;
    padding: 0 10px;

    &::before,
    &::after {
      border: none !important;
    }
  }

  & .MuiInputBase-input {
    font-size: ${(props) => props.theme.font.size.normal};
    color: ${(props) => props.theme.font.color.main};

    &::placeholder {
      font-size: ${(props) => props.theme.font.size.normal};
      letter-spacing: 0.02em;

      opacity: 1;
      color: ${(props) =>
        props.theme.controller.input.color.secondary} !important;
    }
  }
`;

const Buttons = styled.div`
  display: flex;

  gap: 15px;
  margin-top: 32px;
  margin-left: 50%;
  transform: translateX(-50%);

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    margin: 0;
    margin-left: 32px;

    transform: none;
  }
`;

const ButtonStyled = styled(Button)`
  &.MuiButtonBase-root {
    width: 125px;
    height: 44px;

    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: #52555f;

    border: 2px solid
      ${(props) => props.theme.controller.button.border.secondary};
    border-radius: 16px;

    &:active,
    &:hover {
      color: #fff;

      background-color: ${(props) =>
        props.theme.controller.button.background.selected};
    }
  }
`;

export const Controls = () => {
  const {
    handleChangeDescriptionText,
    handleChangeSelectedCategory,
    handleChangeAmount,
    handleCreate,
    handleClearInput,
    descriptionText,
    selectedCategory,
    amountText,
    currentListCategory,
  } = useHandleCreateListItem();

  return (
    <Container>
      <Calendar />

      <Inputs>
        <InputDescription
          placeholder="Описание товара"
          value={descriptionText}
          onChange={handleChangeDescriptionText}
        />

        <CategoryList
          handleChangeSelectedCategory={handleChangeSelectedCategory}
          selectedCategory={selectedCategory}
          currentListCategory={currentListCategory}
        />

        <InputAmount
          type="number"
          placeholder="0,00"
          endAdornment={<CalculatorIcon />}
          value={amountText}
          onChange={handleChangeAmount}
        />
      </Inputs>

      <Buttons>
        <ButtonStyled onClick={handleCreate}>ввод</ButtonStyled>
        <ButtonStyled onClick={handleClearInput}>очистить</ButtonStyled>
      </Buttons>
    </Container>
  );
};
