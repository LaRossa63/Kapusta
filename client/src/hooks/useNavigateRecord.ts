import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/types';

export const useNavigateRecord = () => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  const handleClickRecord = () => {
    navigate(`/record${pathname}`, { state: pathname });
  };

  const handleClickGoBack = () => {
    if (state === null) {
      navigate(AppRoutes.OUTLAY);
      return;
    }

    navigate(state);
  };

  return { handleClickRecord, handleClickGoBack };
};
