import { useLocation } from 'react-router-dom';
import { AppRoutes } from 'types/types';

export const useCurrentPage = () => {
  const { pathname } = useLocation();

  const isOpenOutlay = () => {
    return pathname === AppRoutes.OUTLAY;
  };

  const isOpenProfit = () => {
    return pathname === AppRoutes.PROFIT;
  };

  const isOpenRecordOutlay = () => {
    return pathname === AppRoutes.RECORD_OUTLAY;
  };

  const isOpenRecordProfit = () => {
    return pathname === AppRoutes.RECORD_PROFIT;
  };

  return { isOpenOutlay, isOpenProfit, isOpenRecordOutlay, isOpenRecordProfit };
};
