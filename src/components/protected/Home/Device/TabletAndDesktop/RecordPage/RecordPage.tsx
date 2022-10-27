import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  position: relative;

  z-index: 100;
`;

export const RecordPage = () => {
  const { pathname } = useLocation();

  return <Container>{pathname}</Container>;
};
