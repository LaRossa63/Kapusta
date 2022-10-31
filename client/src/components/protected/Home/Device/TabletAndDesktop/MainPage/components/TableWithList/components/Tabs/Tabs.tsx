import React from 'react';
import styled, { css } from 'styled-components';

import { Button } from 'components/Elements';
import { AppRoutes } from 'types/types';
import { useNavigateTabs } from 'hooks';

const Container = styled.div``;

const ButtonStyled = styled(Button)<{ active: number }>`
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
      props.active
        ? css`
            color: ${(props) =>
              props.theme.controller.button.color.selectedSecondary};
            background-color: #fefefe;
          `
        : null}
  }
`;

export const Tabs = () => {
  const { handleClickByOutlay, handleClickByProfit, currentActiveTabs } =
    useNavigateTabs();

  return (
    <Container>
      <ButtonStyled
        onClick={handleClickByOutlay}
        active={Number(currentActiveTabs === AppRoutes.OUTLAY)}
      >
        Расход
      </ButtonStyled>

      <ButtonStyled
        onClick={handleClickByProfit}
        active={Number(currentActiveTabs === AppRoutes.PROFIT)}
      >
        Доход
      </ButtonStyled>
    </Container>
  );
};
