import React from 'react';
import styled from 'styled-components';

import { Button } from 'components/Elements';
import { RecordsContainer } from '../../../Elements';

const Container = styled.div`
  margin-top: 40px;
`;

const SecondaryText = styled.p`
  font-size: ${(props) => props.theme.font.size.normal};
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.02em;

  color: rgba(82, 85, 95, 0.7);
`;

const BalanceContainer = styled.div`
  margin-top: 43px;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 8px;

  border: 2px solid ${(props) => props.theme.controller.input.border.secondary};
  border-radius: 22px;
`;

const Input = styled.input`
  width: 50%;
  height: 44px;

  padding: 12px 16px;

  border-right: 2px solid
    ${(props) => props.theme.controller.input.border.secondary};

  &::placeholder {
    text-align: center;
    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: ${(props) => props.theme.font.color.main};
  }
`;

const ButtonStyled = styled(Button)`
  &.MuiButtonBase-root {
    width: 50%;

    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: ${(props) => props.theme.font.color.secondaryMain};

    padding: 12px 10px;
    border-radius: 0 22px 22px 0;
    &:active,
    &:hover {
      color: ${(props) => props.theme.controller.button.color.selected};

      background-color: ${(props) =>
        props.theme.controller.button.background.selected};
    }
  }
`;

export const RefillMoney = () => {
  return (
    <Container>
      <RecordsContainer />

      <BalanceContainer>
        <SecondaryText>Баланс:</SecondaryText>

        <ControlsContainer>
          <Input type="number" placeholder="00.00 EU" />
          <ButtonStyled>Подтвердить</ButtonStyled>
        </ControlsContainer>
      </BalanceContainer>
    </Container>
  );
};
