import React from 'react';
import styled from 'styled-components';

import { Label, SliderPeriod } from 'components/Elements';
import { ArrowBackIcon } from 'images';
import { useBalance, useNavigateRecord } from 'hooks';

const Container = styled.div`
  height: 44px;

  display: flex;
  align-items: center;

  margin-top: 40px;
`;

const SecondaryText = styled.p`
  font-size: ${(props) => props.theme.font.size.normal};
  font-weight: '500';
  letter-spacing: '0.02em';

  text-align: center;
  color: rgba(82, 85, 95, 0.7);
`;

const ContainerBalance = styled.div`
  display: flex;
  align-items: center;

  margin-left: 70px;
`;

const CountBalance = styled.span`
  width: 125px;
  height: 44px;

  font-weight: 700;
  font-size: ${(props) => props.theme.font.size.normal};
  letter-spacing: 0.02em;
  text-transform: uppercase;

  padding: 12px 16px;
  margin-left: 20px;

  border: 2px solid ${(props) => props.theme.controller.input.border.secondary};
  border-radius: 16px;
  color: ${(props) => props.theme.font.color.main};
`;

export const TopPanel = () => {
  const { handleClickGoBack } = useNavigateRecord();
  const { balance } = useBalance();

  return (
    <Container>
      <Label gap="18px" onClick={handleClickGoBack}>
        <ArrowBackIcon />
        <SecondaryText>Вернуться на главную</SecondaryText>
      </Label>

      <ContainerBalance>
        <SecondaryText>Баланс:</SecondaryText>

        <CountBalance>{`${balance} ₽`}</CountBalance>
      </ContainerBalance>

      <SliderPeriod />
    </Container>
  );
};
