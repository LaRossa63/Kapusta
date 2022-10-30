import React from 'react';
import styled from 'styled-components';

import { Button, ErrorText } from 'components/Elements';
import { useFormSignIn } from 'hooks/Auth';

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

  height: 52px;

  padding-left: 19px;

  background-color: ${(props) => props.theme.controller.input.background.main};
  border-radius: 30px;

  color: #a6abb9;

  &:focus {
    border-bottom: 1px solid
      ${(props) => props.theme.controller.input.border.selected};
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;

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
    background-color: ${(props) =>
      props.theme.controller.button.background.main};

    border-radius: 16px;

    &:active,
    &:hover {
      color: ${(props) => props.theme.controller.button.color.selected};

      background-color: ${(props) =>
        props.theme.controller.button.background.selected};
    }
  }
`;

export const Form = () => {
  const {
    handleSubmitForm,
    handleChangeEmail,
    handleChangePassword,
    handleClickSignUp,
    email,
    password,
    isLoading,
    error,
  } = useFormSignIn();

  return (
    <MyForm>
      <Label>
        Электронная почта:
        <Input
          type="email"
          placeholder="your@email.com"
          onChange={handleChangeEmail}
          value={email}
        />
      </Label>

      <Label>
        Пароль:
        <Input
          type="password"
          placeholder="Пароль"
          onChange={handleChangePassword}
          value={password}
        />
      </Label>

      <ContainerBtn>
        <ButtonStyled onClick={handleSubmitForm} disabled={isLoading}>
          Войти
        </ButtonStyled>
        <ButtonStyled onClick={handleClickSignUp}>Регистрация</ButtonStyled>
      </ContainerBtn>

      {error && <ErrorText>{error}</ErrorText>}
    </MyForm>
  );
};
