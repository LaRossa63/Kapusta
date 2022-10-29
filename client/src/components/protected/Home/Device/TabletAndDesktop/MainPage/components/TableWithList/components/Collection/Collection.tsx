import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  /* height: fit-content; */

  margin-bottom: 60px;

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    width: fit-content;

    margin: 0;
    margin-left: 75px;
  }
`;

const Content = styled.div`
  width: 230px;

  margin-top: 40px;

  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    margin: 0;
  }
`;

const HeaderItem = styled.div`
  height: 38px;

  font-weight: 700;
  font-size: ${(props) => props.theme.font.size.normal};
  letter-spacing: 0.02em;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f6fb;
  border-bottom: 2px solid #ffffff;
  border-radius: 16px 16px 0 0;
  color: #000000;

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    border-bottom: 4px solid #ffffff;
  }
`;

const MainItem = styled.div<{ last?: boolean }>`
  height: 38px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 21px;

  background: #f5f6fb;
  border-bottom: 2px solid #ffffff;
  color: #52555f;

  ${(props) =>
    props.last &&
    css`
      border-bottom-right-radius: 16px;
    `}
`;

const Text = styled.span`
  font-size: ${(props) => props.theme.font.size.normal};
`;

export const Collection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(`Запрос на получение сводки ${pathname}`);
  }, [pathname]);

  return (
    <Container>
      <Content>
        <HeaderItem>Сводка</HeaderItem>

        <MainItem>
          <Text>Ноябрь</Text>
          <Text>10 000.00</Text>
        </MainItem>

        <MainItem>
          <Text>Октябрь</Text>
          <Text>30 000.00</Text>
        </MainItem>

        <MainItem>
          <Text>Сентябрь</Text>
          <Text>30 000.00</Text>
        </MainItem>

        <MainItem>
          <Text>Август</Text>
          <Text>20 000.00</Text>
        </MainItem>

        <MainItem>
          <Text>Июль</Text>
          <Text>15 000.00</Text>
        </MainItem>

        <MainItem last>
          <Text>Июнь</Text>
          <Text>18 000.00</Text>
        </MainItem>
      </Content>
    </Container>
  );
};
