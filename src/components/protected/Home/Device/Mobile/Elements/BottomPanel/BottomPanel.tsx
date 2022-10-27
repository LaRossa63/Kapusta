import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  position: relative;
  z-index: 100;

  bottom: 56px;
`;

const Content = styled.div`
  height: 100px;
  background-color: red;
`;

export const BottomPanel = () => {
  return (
    <Container>
      <Content>BottomPanel</Content>
    </Container>
  );
};
