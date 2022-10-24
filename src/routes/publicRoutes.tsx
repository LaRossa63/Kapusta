import { SignIn, SignUp } from 'components/public';
import { PublicLayout } from 'Layout';
import { AppRoutes } from 'types/types';

export const PublicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      { path: AppRoutes.SIGNIN, element: <SignIn /> },
      { path: AppRoutes.SIGNUP, element: <SignUp /> },
    ],
  },
];
