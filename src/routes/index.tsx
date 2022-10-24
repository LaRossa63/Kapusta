import { Route, Routes } from 'react-router-dom';

import { AppLayout } from 'Layout';
import { SignIn, SignUp } from 'components';
import { AppRoutes } from 'types/types';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={AppRoutes.HOME} element={<AppLayout />}>
          <Route index element={<h1>Home</h1>} />

          <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
          <Route path={AppRoutes.SIGNUP} element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};
