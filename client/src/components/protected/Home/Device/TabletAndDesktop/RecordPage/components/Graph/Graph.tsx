import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 422px;

  margin-top: 25px;

  background: ${(props) => props.theme.background.body};

  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
`;

export const Graph = () => {
  return <Container></Container>;
};
