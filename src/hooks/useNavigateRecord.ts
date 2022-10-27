import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const useNavigateRecord = () => {
  const { pathname } = useLocation();
  const navigator = useNavigate();

  const handleClickRecord = () => {
    navigator(`/record${pathname}`);
  };

  return { handleClickRecord };
};
