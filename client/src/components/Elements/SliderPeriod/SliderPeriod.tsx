import React, { FC } from 'react';
import styled from 'styled-components';

import { Button } from 'components/Elements';
import { SliderLeftIcon, SliderRightIcon } from 'images';

const ContainerCurrentPeriod = styled.div<{ marginLeft?: string }>`
  display: flex;
  flex-direction: column;

  margin-left: ${(props) => props.marginLeft || '100px'};
  gap: 5px;
`;

const SecondaryText = styled.p`
  font-size: ${(props) => props.theme.font.size.normal};
  text-align: center;
  color: rgba(82, 85, 95, 0.7);
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

const ButtonStyled = styled(Button)`
  &.MuiButton-root {
    min-width: 15px;
    height: 10px;
  }
`;

interface Props {
  marginLeft?: string;
}

export const SliderPeriod: FC<Props> = ({ marginLeft }) => {
  return (
    <ContainerCurrentPeriod marginLeft={marginLeft}>
      <SecondaryText>Текущий период:</SecondaryText>

      <ContentCurrentPeriod>
        <ButtonStyled>
          <SliderLeftIcon />
        </ButtonStyled>

        <CurrentPeriodText>ноябрь 2019</CurrentPeriodText>

        <ButtonStyled>
          <SliderRightIcon />
        </ButtonStyled>
      </ContentCurrentPeriod>
    </ContainerCurrentPeriod>
  );
};
