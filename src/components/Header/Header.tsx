import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;

  padding-left: 45px;

  background-color: ${(props) => props.theme.background.header};
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: bolder;

  z-index: 10;

  color: ${(props) => props.theme.fontSize.main};
`;

const Ellipse = styled.div<{ primary?: boolean }>`
  width: 35px;
  height: 26px;

  position: absolute;
  left: 40px;

  background-color: ${(props) => props.theme.ellipse};
  border-radius: 8px;

  ${(props) =>
    props.primary &&
    css`
      top: 10px;
      left: 30px;

      background: rgba(251, 124, 47, 0.2);
    `}
`;

export const Header = () => {
  return (
    <Container>
      <Title>Kapusta</Title>
      <Ellipse />
      <Ellipse primary />
    </Container>
  );
};
