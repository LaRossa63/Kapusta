import React from 'react';
import styled from 'styled-components';

import { GraphIcon } from 'images';

const Container = styled.div`
  margin-top: 47px;
`;

const Records = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;

const SecondaryText = styled.p`
  font-size: ${(props) => props.theme.font.size.normal};

  color: rgba(82, 85, 95, 0.7);
`;

export const RecordsContainer = () => {
  return (
    <Container>
      <Records>
        <SecondaryText>Перейти к отчетам </SecondaryText>
        <GraphIcon />
      </Records>
    </Container>
  );
};
