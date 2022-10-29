import React from 'react';
import { Outlet } from 'react-router-dom';

import { Banner, Header } from 'components/public';

export const PublicLayout = () => {
  return (
    <>
      <Header />
      <Banner />

      <Outlet />
    </>
  );
};
