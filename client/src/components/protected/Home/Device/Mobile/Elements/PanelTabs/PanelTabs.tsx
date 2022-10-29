import { Button } from 'components/Elements';
import { useNavigateTabs } from 'hooks';
import React from 'react';
import styled, { css } from 'styled-components';
import { AppRoutes } from 'types/types';

const Container = styled.div`
  width: 100%;
  height: 53px;

  display: flex;

  gap: 4px;

  position: absolute;
  bottom: 0;
`;

const ButtonStyled = styled(Button)<{ active?: boolean }>`
  &.MuiButtonBase-root {
    width: calc(50% - 2px);
    height: 100%;

    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;
    text-transform: uppercase;

    background-color: ${(props) =>
      props.theme.controller.button.background.main};
    border-radius: 0;

    color: ${(props) => props.theme.font.color.main};

    &:hover {
      background-color: ${(props) =>
        props.theme.controller.button.background.selected};

      color: ${(props) => props.theme.controller.button.color.selected};
    }

    ${(props) =>
      props.active &&
      css`
        color: ${(props) => props.theme.controller.button.color.selected};

        background-color: ${(props) =>
          props.theme.controller.button.background.selected};
      `}
  }
`;

export const PanelTabs = () => {
  const { handleClickByOutlay, handleClickByProfit, currentActiveTabs } =
    useNavigateTabs();

  return (
    <Container>
      <ButtonStyled
        onClick={handleClickByOutlay}
        active={currentActiveTabs === AppRoutes.OUTLAY}
      >
        Расход
      </ButtonStyled>

      <ButtonStyled
        onClick={handleClickByProfit}
        active={currentActiveTabs === AppRoutes.PROFIT}
      >
        Доход
      </ButtonStyled>
    </Container>
  );
};
