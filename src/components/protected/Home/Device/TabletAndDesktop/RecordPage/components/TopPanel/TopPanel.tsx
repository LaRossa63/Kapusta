import React from 'react';
import styled from 'styled-components';

import { Label } from 'components/Elements';
import { ArrowBackIcon, SliderLeftIcon, SliderRightIcon } from 'images';

const Container = styled.div`
  height: 44px;

  display: flex;
  align-items: center;

  margin-top: 40px;
`;

const SecondaryText = styled.p<{ fontWeight?: string; letterSpacing?: string }>`
  font-size: ${(props) => props.theme.font.size.normal};
  font-weight: ${(props) => props.fontWeight || '400'};
  letter-spacing: ${(props) => props.letterSpacing || '0.04em'};

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

const ContainerCurrentPeriod = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 100px;
  gap: 5px;
`;

const CurrentPeriodText = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.font.size.normalBig};
  line-height: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;

  color: ${(props) => props.theme.font.color.main};
`;

const ContentCurrentPeriod = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;
`;

export const TopPanel = () => {
  return (
    <Container>
      <Label gap="18px">
        <ArrowBackIcon />
        <SecondaryText>Вернуться на главную</SecondaryText>
      </Label>

      <ContainerBalance>
        <SecondaryText fontWeight="500" letterSpacing="0.02em">
          Баланс:
        </SecondaryText>

        <CountBalance>55 000.00 UAH</CountBalance>
      </ContainerBalance>

      <ContainerCurrentPeriod>
        <SecondaryText>Текущий период:</SecondaryText>

        <ContentCurrentPeriod>
          <SliderLeftIcon cursor="pointer" />

          <CurrentPeriodText>ноябрь 2019</CurrentPeriodText>

          <SliderRightIcon cursor="pointer" />
        </ContentCurrentPeriod>
      </ContainerCurrentPeriod>
    </Container>
  );
};
