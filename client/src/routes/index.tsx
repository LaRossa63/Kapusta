import { useCheckAuth } from 'api/services/Auth';
import { Navigate, useRoutes } from 'react-router-dom';

import { AppRoutes } from 'types/types';
import { ProtectedRoutes } from './protectedRoutes';
import { PublicRoutes } from './publicRoutes';

export const AppRouter = () => {
  const { data: isAuth } = useCheckAuth();

  const commonRoutes = [
    {
      path: '*',
      element: <Navigate to={isAuth ? AppRoutes.OUTLAY : AppRoutes.SIGNIN} />,
    },
  ];

  const routes = isAuth ? ProtectedRoutes : PublicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
