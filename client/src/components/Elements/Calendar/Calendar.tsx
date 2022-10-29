import { CalendarIcon } from 'images';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
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

export const Calendar = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [selectedData, setSelectedData] = useState('21.11.2019');

  const handleOpenCalendar = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };

  return (
    <Container>
      <CalendarIcon onClick={handleOpenCalendar} />
      <CalendarText>{selectedData}</CalendarText>
    </Container>
  );
};
