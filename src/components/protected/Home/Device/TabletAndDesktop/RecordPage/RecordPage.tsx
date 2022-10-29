import React from 'react';
import styled from 'styled-components';

import {
  Graph,
  OutlayAndProfitSlider,
  OutlayAndProfitTotal,
  TopPanel,
} from './components';

const Container = styled.div`
  width: 100%;
  max-width: 704px;

  margin: 0 auto;

  position: relative;
  z-index: 100;

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    max-width: 1034px;
  }
`;

export const RecordPage = () => {
  return (
    <Container>
      <TopPanel />
      <OutlayAndProfitTotal />
      <OutlayAndProfitSlider />
      <Graph />
    </Container>
  );
};
