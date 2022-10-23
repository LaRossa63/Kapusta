import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 342px;

  @media (min-width: ${(props) => props.theme.device.tab}) {
    height: 582px;
  }

  background: url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat,
    url('./images/Banner/kapusta.png') no-repeat;

  background-position: 10px 90px, 140px 28px, 152px 177px, 259px 91px,
    390px 28px, 508px 91px, 638px 28px, 757px 91px, 887px 28px, 1006px 91px,
    1136px 28px, 1128px 165px, 1255px 91px;

  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
`;

const Content = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 25px;

  padding: 86px 0 0 20px;

  @media (min-width: ${(props) => props.theme.device.tab}) {
    padding: 80px 0 0 170px;
  }

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    padding: 300px 0 0 230px;
  }
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: bold;

  color: ${(props) => props.theme.fontSize.main};
`;

const SecondaryText = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;

  text-transform: uppercase;

  color: ${(props) => props.theme.fontSize.secondary};
`;

export const Banner = () => {
  return (
    <Container>
      <Content>
        <Title>Kapusta</Title>
        <SecondaryText>Smart Finance</SecondaryText>
      </Content>
    </Container>
  );
};
