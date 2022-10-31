import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { SliderLeftIcon, SliderRightIcon } from 'images';
import { Button } from 'components/Elements';
import { AppRoutes } from 'types/types';
import { useCurrentPage } from 'hooks';

const ContainerSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 16px;
`;

const TextSlider = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.font.size.normalBig};
  line-height: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #000000;
`;

const ButtonStyled = styled(Button)`
  &.MuiButton-root {
    min-width: 15px;
    height: 10px;
  }
`;

export const SliderOutlayAndProfit = () => {
  const navigate = useNavigate();
  const { isOpenOutlay, isOpenProfit } = useCurrentPage();

  const getStartCurrentIndex = () => {
    if (isOpenOutlay()) {
      return 0;
    }

    if (isOpenProfit()) {
      return 1;
    }

    return 0;
  };

  const [arrayListText, setArrayListText] = useState(['расходы', 'доходы']);
  const [currentIndex, setCurrentIndex] = useState(getStartCurrentIndex());

  const handleClickArrowLeft = () => {
    if (currentIndex - 1 >= 0) {
      navigate(AppRoutes.RECORD_OUTLAY);
      setCurrentIndex(0);
      return;
    }

    navigate(AppRoutes.RECORD_PROFIT);
    setCurrentIndex(1);
  };

  const handleClickArrowRight = () => {
    if (arrayListText.length - 1 >= currentIndex + 1) {
      navigate(AppRoutes.RECORD_PROFIT);
      setCurrentIndex(1);
      return;
    }

    navigate(AppRoutes.RECORD_OUTLAY);
    setCurrentIndex(0);
  };

  return (
    <ContainerSlider>
      <ButtonStyled onClick={handleClickArrowLeft}>
        <SliderLeftIcon />
      </ButtonStyled>

      <TextSlider>{arrayListText[currentIndex]}</TextSlider>

      <ButtonStyled onClick={handleClickArrowRight}>
        <SliderRightIcon />
      </ButtonStyled>
    </ContainerSlider>
  );
};
