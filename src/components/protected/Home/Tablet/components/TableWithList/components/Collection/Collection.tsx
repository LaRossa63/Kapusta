import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: fit-content;

  margin-bottom: 60px;
`;

const Content = styled.div`
  width: 230px;
  height: 278px;

  margin-top: 40px;

  text-transform: uppercase;
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
