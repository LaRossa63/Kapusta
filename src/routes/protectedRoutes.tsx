import { Home } from 'components/protected';
import { ProtectedLayout } from 'Layout/ProtectedLayout';
import { AppRoutes } from 'types/types';

export const ProtectedRoutes = [
  {
    element: <ProtectedLayout />,
    children: [{ path: AppRoutes.HOME, element: <Home /> }],
  },
];
