import React from 'react';
import { Header, Banner } from 'components/protected';
import { Outlet } from 'react-router-dom';

export const ProtectedLayout = () => {
  return (
    <>
      <Header />
      <Banner />

      <Outlet />
    </>
  );
};
