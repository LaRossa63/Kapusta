import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Button } from 'components/Elements';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/types';

const Container = styled.div``;

const ButtonStyled = styled(Button)<{ active?: any }>`
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
  const { pathname } = useLocation();
  const navigator = useNavigate();
  const [activeBtn, setActiveBtn] = useState(pathname);

  const handleClickOutlay = () => {
    navigator(AppRoutes.OUTLAY);
    setActiveBtn(AppRoutes.OUTLAY);
  };

  const handleClickProfit = () => {
    navigator(AppRoutes.PROFIT);
    setActiveBtn(AppRoutes.PROFIT);
  };

  return (
    <Container>
      <ButtonStyled
        onClick={handleClickOutlay}
        active={activeBtn === AppRoutes.OUTLAY}
      >
        Расход
      </ButtonStyled>

      <ButtonStyled
        onClick={handleClickProfit}
        active={activeBtn === AppRoutes.PROFIT}
      >
        Доход
      </ButtonStyled>
    </Container>
  );
};
