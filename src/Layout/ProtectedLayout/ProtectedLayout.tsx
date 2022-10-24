import React from 'react';
import { Outlet } from 'react-router-dom';

export const ProtectedLayout = () => {
  return (
    <>
      <h1>Header</h1>
      <h1>Banner</h1>

      <Outlet />
    </>
  );
};
