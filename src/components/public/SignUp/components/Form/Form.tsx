import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Elements';
import { AppRoutes } from 'types/types';

const MyForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  gap: 20px;
`;

const Label = styled.label`
  font-size: ${(props) => props.theme.font.size.normal};
  line-height: 12px;

  display: flex;
  flex-direction: column;

  gap: 12px;

  color: ${(props) => props.theme.font.color.main};

  @media (min-width: ${(props) => props.theme.device.tab}) {
    font-size: ${(props) => props.theme.font.size.normalBig};
    line-height: 14px;
  }
`;

const Input = styled.input`
  font-size: ${(props) => props.theme.font.size.normalBig};

  min-width: 240px;
  height: 52px;

  padding-left: 19px;

  background-color: ${(props) => props.theme.background.input.main};
  border-radius: 30px;

  color: #a6abb9;

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.background.input.selected};
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
  gap: 8px;
`;

const ButtonStyled = styled(Button)`
  &.MuiButtonBase-root {
    font-size: ${(props) => props.theme.font.size.normal};
    font-weight: 700;
    letter-spacing: 0.02em;

    padding: 12px 25px;

    color: ${(props) => props.theme.font.color.main};
    background-color: ${(props) => props.theme.background.button.main};

    border-radius: 16px;

    &:active,
    &:hover {
      color: ${(props) => props.theme.background.button.activeText};
      background-color: ${(props) => props.theme.background.button.active};
    }
  }
`;

export const Form = () => {
  const navigator = useNavigate();

  const handleClickSignUp = () => {
    console.log('message');
  };

  const handleClickSignIn = () => {
    navigator(`/${AppRoutes.SIGNIN}`);
  };

  return (
    <MyForm>
      <Label>
        Имя:
        <Input type="email" placeholder="your@email.com" />
      </Label>

      <Label>
        Электронная почта:
        <Input type="email" placeholder="your@email.com" />
      </Label>

      <Label>
        Пароль:
        <Input type="password" placeholder="Пароль" />
      </Label>

      <Label>
        Повторно пароль:
        <Input type="password" placeholder="Пароль" />
      </Label>

      <ContainerBtn>
        <ButtonStyled onClick={handleClickSignUp}>
          Зарегистрироваться
        </ButtonStyled>

        <ButtonStyled onClick={handleClickSignIn}>Авторизоваться</ButtonStyled>
      </ContainerBtn>
    </MyForm>
  );
};
