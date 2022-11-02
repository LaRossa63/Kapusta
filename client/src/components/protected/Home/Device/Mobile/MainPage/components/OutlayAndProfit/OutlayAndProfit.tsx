import { Button, Calendar } from 'components/Elements';
import { useBalance } from 'hooks';
import React from 'react';
import styled from 'styled-components';
import { ContainerRecords, PanelTabs } from '../../../Elements';

const Container = styled.div`
  width: 100%;
  max-width: 350px;

  position: relative;
  z-index: 100;

  margin: 0 auto;
  margin-top: 47px;
  padding: 0 20px;
`;

const BalanceContainer = styled.div`
  margin-top: 43px;
`;

const SecondaryText = styled.p`
  font-size: ${(props) => props.theme.font.size.normal};
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.02em;

  color: rgba(82, 85, 95, 0.7);
`;

const ContainerControls = styled.div`
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

const ContainerCalender = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 45px;
`;

export const OutlayAndProfit = () => {
  const { handleChangeBalance, handleClickButton, balance } = useBalance();

  return (
    <>
      <Container>
        <ContainerRecords />

        <BalanceContainer>
          <SecondaryText>Баланс:</SecondaryText>
          <ContainerControls>
            <Input
              type="number"
              placeholder={`${balance} ₽`}
              onChange={handleChangeBalance}
              value={balance}
            />
            <ButtonStyled onClick={handleClickButton}>Подтвердить</ButtonStyled>
          </ContainerControls>
        </BalanceContainer>

        <ContainerCalender>
          <Calendar />
        </ContainerCalender>
      </Container>

      <PanelTabs />
    </>
  );
};
