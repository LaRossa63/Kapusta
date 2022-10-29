import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { BaseStyle } from 'theme/BaseStyle';
import { theme } from 'theme/Theme';

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <BaseStyle>{children}</BaseStyle>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
