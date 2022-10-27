import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

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
`;

export const RecordPage = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <TopPanel />
      <OutlayAndProfitTotal />
      <OutlayAndProfitSlider />
      <Graph />
    </Container>
  );
};
