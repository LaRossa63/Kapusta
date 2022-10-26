import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </div>
  );
};
