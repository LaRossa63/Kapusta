import React from 'react';
import styled from 'styled-components';

import { Button, CategoryList, Label } from 'components/Elements';
import { useHandleCreateListItem } from 'hooks';
import { ArrowBackIcon, CalculatorIcon } from 'images';

const Container = styled.div`
  width: 100%;
  max-width: 350px;

  position: relative;
  z-index: 100;

  margin: 0 auto;
  margin-top: 40px;
  padding: 0 20px;
`;

const ArrowStyled = styled(Button)`
  &.MuiButtonBase-root {
    min-width: 18px;
    height: 12px;

    padding: 0;
  }
`;

const ContainerForm = styled.div`
  width: 280px;
  height: 88px;

  margin-top: 24px;

  border: 2px solid #ffffff;
  border-radius: 16px 16px 0 0;
`;

const DescriptionInput = styled.input`
  width: 280px;
  height: 44px;

  padding: 16px 32px 16px 14px;

  font-size: ${(props) => props.theme.font.size.normal};
  color: ${(props) => props.theme.font.color.main};

  border-bottom: 2px solid #ffffff;

  &::placeholder {
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;

    color: ${(props) => props.theme.controller.input.color.secondary};
  }
`;

const ContainerAmount = styled.div`
  width: 155px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 12px 0;

  border: 2px solid #ffffff;
  border-radius: 22px;
`;

const AmountInput = styled.input`
  width: 100px;

  font-size: ${(props) => props.theme.font.size.normal};
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) => props.theme.font.color.main};

  &::placeholder {
    color: ${(props) => props.theme.font.color.main};
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 80px;
`;

const ButtonStyled = styled(Button)`
  &.MuiButtonBase-root {
    width: 130px;

    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;
    text-transform: uppercase;

    padding: 12px 35px;

    background-color: ${(props) =>
      props.theme.controller.button.background.main};
    box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
    border-radius: 16px;

    color: ${(props) => props.theme.font.color.secondary};

    &:hover,
    &:active {
      background-color: ${(props) =>
        props.theme.controller.button.background.selected};
      color: ${(props) => props.theme.controller.button.color.selected};
    }
  }
`;

export const ChoosingCategory = () => {
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
      <ArrowStyled>
        <ArrowBackIcon />
      </ArrowStyled>

      <ContainerForm>
        <DescriptionInput placeholder="Описание товара" />

        <CategoryList
          handleChangeSelectedCategory={handleChangeSelectedCategory}
          selectedCategory={selectedCategory}
          currentListCategory={currentListCategory}
        />
      </ContainerForm>

      <ContainerAmount>
        <Label>
          <AmountInput
            type="number"
            placeholder="0,00"
            value={amountText}
            onChange={handleChangeAmount}
          />

          <CalculatorIcon />
        </Label>
      </ContainerAmount>

      <ContainerButton>
        <ButtonStyled>ввод</ButtonStyled>
        <ButtonStyled>очистить</ButtonStyled>
      </ContainerButton>
    </Container>
  );
};
