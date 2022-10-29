import { Home } from 'components/protected';
import { ProtectedLayout } from 'Layout/ProtectedLayout';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from 'types/types';

export const ProtectedRoutes = [
  {
    element: <ProtectedLayout />,
    children: [
      { path: AppRoutes.OUTLAY, element: <Home /> },
      { path: AppRoutes.PROFIT, element: <Home /> },
      { path: AppRoutes.RECORD_OUTLAY, element: <Home /> },
      { path: AppRoutes.RECORD_PROFIT, element: <Home /> },
      {
        path: '*',
        element: <Navigate to={AppRoutes.OUTLAY} />,
      },
    ],
  },
];
