import React from 'react';
import styled, { css } from 'styled-components';

import { Button } from 'components/Elements';

const Container = styled.div``;

const ButtonStyled = styled(Button)<{ active?: boolean }>`
  &.MuiButtonBase-root {
    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;
    text-transform: uppercase;

    padding: 10px 30px;

    color: ${(props) => props.theme.controller.button.color.secondary};
    background-color: #fafbfd;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    ${(props) =>
      props.active &&
      css`
        color: ${(props) =>
          props.theme.controller.button.color.selectedSecondary};
        background-color: #fefefe;
      `}
  }
`;

export const Tabs = () => {
  return (
    <Container>
      <ButtonStyled active>Расход</ButtonStyled>
      <ButtonStyled>Доход</ButtonStyled>
    </Container>
  );
};
