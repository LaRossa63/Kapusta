import React from 'react';
import styled from 'styled-components';

import { Form } from './components/Form';
import { SecondaryText } from 'components/Elements';
import { KapustaSecondaryBackground } from 'images';

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
  max-height: 666px;

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
  font-size: ${(props) => props.theme.font.size.normal};
  line-height: 12px;

  @media (min-width: ${(props) => props.theme.device.tab}) {
    font-size: ${(props) => props.theme.font.size.normal};
    line-height: 14px;
  }
`;

const KapustaBackground = styled(KapustaSecondaryBackground)`
  min-width: 183px;
  min-height: 142px;

  position: absolute;
  z-index: 1;

  left: -50px;
`;

export const SignUp = () => {
  return (
    <Container>
      <Background>
        <SecondaryTextStyled textAlign="center">
          Для регистрации заполните форму
        </SecondaryTextStyled>

        <Form />
      </Background>

      <KapustaBackground />
    </Container>
  );
};
