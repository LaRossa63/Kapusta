import React from 'react';
import { AppRouter } from 'routes';
import { AppProvider } from 'provider';

export const App = () => {
  return (
    <>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </>
  );
};
