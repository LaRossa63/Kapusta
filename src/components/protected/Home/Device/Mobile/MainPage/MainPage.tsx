import React from 'react';
import styled from 'styled-components';

import { RefillMoney } from './components';

const Container = styled.div`
  width: 100%;
  max-width: 350px;

  position: relative;
  z-index: 100;

  margin: 0 auto;
  padding: 0 20px;
`;

export const MainPage = () => {
  return (
    <Container>
      <RefillMoney />
    </Container>
  );
};
