import React from 'react';
import styled from 'styled-components';

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

export const Banner = () => {
  return <Container />;
};
