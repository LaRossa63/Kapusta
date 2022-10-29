import React from 'react';
import styled from 'styled-components';

import { OutlayAndProfitContent, TopPanel } from './components';

const Container = styled.div`
  width: 100%;
  max-width: 600px;

  margin: 0 auto;
  margin-top: 22px;
  padding: 0 20px;

  position: relative;
  z-index: 100;
`;

export const RecordPage = () => {
  return (
    <Container>
      <TopPanel />

      <OutlayAndProfitContent />
    </Container>
  );
};
