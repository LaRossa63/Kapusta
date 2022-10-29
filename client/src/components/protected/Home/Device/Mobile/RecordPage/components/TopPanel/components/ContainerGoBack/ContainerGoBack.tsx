import React from 'react';
import styled from 'styled-components';

import { Button } from 'components/Elements';
import { ArrowBackIcon } from 'images';
import { useNavigateRecord } from 'hooks';

const Container = styled.div`
  width: 100%;
`;

const ButtonStyled = styled(Button)`
  &.MuiButtonBase-root {
    min-width: 18px;
    height: 12px;

    padding: 0;
  }
`;

export const ContainerGoBack = () => {
  const { handleClickGoBack } = useNavigateRecord();

  return (
    <Container>
      <ButtonStyled onClick={handleClickGoBack}>
        <ArrowBackIcon />
      </ButtonStyled>
    </Container>
  );
};
