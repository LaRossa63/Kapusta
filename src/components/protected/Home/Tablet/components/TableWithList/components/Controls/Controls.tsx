import React, { useState } from 'react';
import styled from 'styled-components';

import { Input } from '@mui/material';
import { CalculatorIcon, CalendarIcon } from 'images';
import { SelectList, Calendar as TestCal, Button } from 'components/Elements';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Calendar = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
  margin-right: 44px;
`;

const CalendarText = styled.span`
  font-weight: 900;
  font-size: ${(props) => props.theme.font.size.normal};
  text-transform: uppercase;

  color: ${(props) => props.theme.font.color.secondary}; ;
`;

const Inputs = styled.div`
  width: 480px;
  height: 44px;

  display: flex;
  align-items: center;

  padding: 10px 0;

  border: 2px solid ${(props) => props.theme.controller.input.border.active};
  border-radius: 16px 16px 16px 0px;
`;

const Description = styled.input`
  width: 180px;

  padding-left: 20px;
  padding-bottom: 5px;

  font-size: ${(props) => props.theme.font.size.normal};
  color: ${(props) => props.theme.font.color.main};

  &::placeholder {
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;

    color: ${(props) => props.theme.controller.input.color.secondary};
  }
`;

const InputCalculator = styled(Input)`
  &.MuiInputBase-root {
    width: 90px;
    padding: 0 10px;

    &::before,
    &::after {
      border: none !important;
    }
  }

  & .MuiInputBase-input {
    font-size: ${(props) => props.theme.font.size.normal};
    color: ${(props) => props.theme.font.color.main};

    &::placeholder {
      font-size: ${(props) => props.theme.font.size.normal};
      letter-spacing: 0.02em;

      opacity: 1;
      color: ${(props) =>
        props.theme.controller.input.color.secondary} !important;
    }
  }
`;

const Buttons = styled.div`
  display: flex;

  gap: 15px;
  margin-top: 32px;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const ButtonStyled = styled(Button)`
  &.MuiButtonBase-root {
    width: 125px;
    height: 44px;

    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.normal};
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: #52555f;

    border: 2px solid
      ${(props) => props.theme.controller.button.border.secondary};
    border-radius: 16px;

    &:active,
    &:hover {
      color: #fff;

      background-color: ${(props) =>
        props.theme.controller.button.background.selected};
    }
  }
`;

export const Controls = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [selectedData, setSelectedData] = useState('21.11.2019');

  const handleOpenCalendar = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };

  return (
    <Container>
      <Calendar>
        <CalendarIcon onClick={handleOpenCalendar} />
        <CalendarText>{selectedData}</CalendarText>
      </Calendar>

      <Inputs>
        <Description placeholder="Описание товара" />
        <SelectList />
        <InputCalculator
          type="number"
          placeholder="0,00"
          endAdornment={<CalculatorIcon />}
        />
      </Inputs>

      <Buttons>
        <ButtonStyled>ввод</ButtonStyled>
        <ButtonStyled>очистить</ButtonStyled>
      </Buttons>

      {isOpenCalendar && <TestCal />}
    </Container>
  );
};
