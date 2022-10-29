import React from 'react';
import styled from 'styled-components';

import { SliderPeriod } from 'components/Elements';
import {
  ContainerBalance,
  ContainerGoBack,
  OutlayAndProfitTotal,
} from './components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerSliderPeriod = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 30px;
`;

export const TopPanel = () => {
  return (
    <Container>
      <ContainerGoBack />

      <ContainerSliderPeriod>
        <SliderPeriod marginLeft="0" />
      </ContainerSliderPeriod>

      <ContainerBalance />

      <OutlayAndProfitTotal />
    </Container>
  );
};
