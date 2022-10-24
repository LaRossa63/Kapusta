import React from 'react';
import styled, { css } from 'styled-components';

import { Logo } from 'images/Logo';

const Container = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;

  padding-left: 45px;

  background-color: ${(props) => props.theme.background.header};
`;

const Ellipse = styled.div<{ primary?: boolean }>`
  width: 35px;
  height: 26px;

  position: absolute;
  left: 40px;

  background-color: ${(props) => props.theme.ellipse.main};
  border-radius: 8px;

  ${(props) =>
    props.primary &&
    css`
      top: 10px;
      left: 30px;

      background-color: ${(props) => props.theme.ellipse.primary};
    `}
`;

export const Header = () => {
  return (
    <Container>
      <Logo style={{ width: '70px', height: '17px', zIndex: 10 }} />
      <Ellipse />
      <Ellipse primary />
    </Container>
  );
};
