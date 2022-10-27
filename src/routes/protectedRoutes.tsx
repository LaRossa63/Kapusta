import { Home } from 'components/protected';
import { ProtectedLayout } from 'Layout/ProtectedLayout';
import { AppRoutes } from 'types/types';

const Test3 = () => {
  return <h1>3</h1>;
};

export const ProtectedRoutes = [
  {
    element: <ProtectedLayout />,
    children: [
      // { path: AppRoutes.HOME, element: <Home /> },
      { path: AppRoutes.OUTLAY, element: <Home /> },
      { path: AppRoutes.PROFIT, element: <Home /> },
      { path: AppRoutes.RECORD_OUTLAY, element: <Home /> },
      { path: AppRoutes.RECORD_PROFIT, element: <Home /> },
      { path: '*', element: <Test3 /> },
    ],
  },
];
