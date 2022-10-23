import React from 'react';
import { Outlet } from 'react-router-dom';

import { Banner, Header } from 'components';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Banner />

      <Outlet />
    </>
  );
};
