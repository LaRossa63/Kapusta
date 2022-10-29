import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppRoutes } from 'types/types';

export const useNavigateTabs = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentActiveTabs, setCurrentActiveTabs] = useState(pathname);

  const handleClickByOutlay = () => {
    navigate(AppRoutes.OUTLAY);
    setCurrentActiveTabs(AppRoutes.OUTLAY);
  };

  const handleClickByProfit = () => {
    navigate(AppRoutes.PROFIT);
    setCurrentActiveTabs(AppRoutes.PROFIT);
  };

  return { handleClickByOutlay, handleClickByProfit, currentActiveTabs };
};
