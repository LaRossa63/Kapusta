import React from 'react';
import styled from 'styled-components';

import { KapustaBackground } from 'images/KapustaBackground';
import { Logo } from 'images/Logo';

const Container = styled.div`
  width: 100%;
  height: 342px;

  position: relative;
  overflow: hidden;

  background-color: ${(props) => props.theme.background.banner};
  border-bottom-left-radius: 80px;

  @media (min-width: ${(props) => props.theme.device.tab}) {
    height: 582px;
  }
`;

const KapustaBackgroundStyled = styled(KapustaBackground)`
  min-width: 1270px;
  height: 232px;

  margin-top: 30px;

  position: absolute;
  z-index: 1;
`;

const Content = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 5px;
  padding: 86px 0 0 20px;

  @media (min-width: ${(props) => props.theme.device.tab}) {
    padding: 80px 0 0 170px;
  }

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    padding: 300px 0 0 230px;
  }
`;

const KapustaLogoStyled = styled(Logo)`
  z-index: 2;

  @media (min-width: ${(props) => props.theme.device.tab}) {
    width: 307px;
    height: 77px;
  }

  @media (min-width: ${(props) => props.theme.device.desktop}) {
    width: 377px;
    height: 120px;
  }
`;

const SecondaryText = styled.p`
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  z-index: 2;

  color: ${(props) => props.theme.font.color.secondary};

  @media (min-width: ${(props) => props.theme.device.tab}) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.18em;
  }
`;

export const Banner = () => {
  return (
    <Container>
      <KapustaBackgroundStyled />

      <Content>
        <KapustaLogoStyled />
        <SecondaryText>Smart Finance</SecondaryText>
      </Content>
    </Container>
  );
};
