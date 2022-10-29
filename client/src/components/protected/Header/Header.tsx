import React from 'react';
import styled, { css } from 'styled-components';

import { useGetDevice } from 'hooks';
import { Logo } from 'images/Logo';
import { Mobile, TabletDesktop } from './components';

const Container = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.background.header};
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;

  margin-left: 45px;
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
  const { isMobile, isTabletAndDesktop } = useGetDevice();

  return (
    <Container>
      <ContainerLogo>
        <Logo style={{ width: '70px', height: '17px', zIndex: 10 }} />
        <Ellipse />
        <Ellipse primary />
      </ContainerLogo>

      {isMobile && <Mobile />}

      {isTabletAndDesktop && <TabletDesktop />}
    </Container>
  );
};
