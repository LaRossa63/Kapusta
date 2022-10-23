import { Route, Routes } from 'react-router-dom';

import { AppLayout } from 'Layout';
import { AppRoutes } from 'types/types';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={AppRoutes.HOME} element={<AppLayout />}>
          <Route index element={<h1>Home</h1>} />

          <Route path={AppRoutes.SIGNIN}>
            <Route index element={<h1>login</h1>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
