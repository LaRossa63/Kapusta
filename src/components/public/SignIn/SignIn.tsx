import React from 'react';
import styled from 'styled-components';

import { Form } from './components/Form';
import { GoogleLink, KapustaSecondaryBackground } from 'images';
import { Button, SecondaryText } from 'components/Elements';

const Container = styled.div`
  position: absolute;
  top: 250px;

  z-index: 10;

  padding: 20px;

  @media (min-width: ${(props) => props.theme.device.tab}) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    transform: none;
    top: 190px;
    right: 0;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;

  max-width: 426px;
  max-height: 552px;

  z-index: 11;
  padding: 40px 20px;

  background-color: ${(props) => props.theme.background.signIn};
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

  border-radius: 30px;

  @media (min-width: ${(props) => props.theme.device.tab}) {
    padding: 56px 83px;
  }
`;

const SecondaryTextStyled = styled(SecondaryText)`
  font-size: ${(props) => props.theme.font.size.small};
  line-height: 12px;

  @media (min-width: ${(props) => props.theme.device.tab}) {
    font-size: ${(props) => props.theme.font.size.normal};
    line-height: 14px;
  }
`;

const ButtonStyled = styled(Button)`
  &.MuiButtonBase-root {
    font-size: ${(props) => props.theme.font.size.normalBig};
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-transform: none;

    margin-top: 20px;
    margin-left: 50%;
    padding: 10px 20px;

    transform: translateX(-50%);

    color: ${(props) => props.theme.font.color.main};
    background-color: ${(props) => props.theme.background.button.main};
    border-radius: 26px;
  }
`;

const KapustaBackground = styled(KapustaSecondaryBackground)`
  min-width: 183px;
  min-height: 142px;

  position: absolute;
  z-index: 1;

  left: -50px;
`;

export const SignIn = () => {
  return (
    <Container>
      <Background>
        <SecondaryTextStyled textAlign="center">
          Вы можете авторизоваться с помощью Google Account:
        </SecondaryTextStyled>

        <ButtonStyled startIcon={<GoogleLink style={{ minWidth: '18px' }} />}>
          Google
        </ButtonStyled>

        <SecondaryTextStyled margin="30px 0 0 0">
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </SecondaryTextStyled>

        <Form />
      </Background>

      <KapustaBackground />
    </Container>
  );
};
