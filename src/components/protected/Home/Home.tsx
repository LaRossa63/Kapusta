import React from 'react';
import { useLocation } from 'react-router-dom';

import { useGetDevice } from 'hooks';
import { AppRoutes } from 'types/types';

import {
  MainPage as MainPageTabletAndDesktop,
  RecordPage as RecordPageTabletAndDesktop,
} from './Device/TabletAndDesktop';
import { MainPage as MainPageMobile } from './Device/Mobile';

export const Home = () => {
  const { pathname } = useLocation();
  const { isMobile, isTabletAndDesktop } = useGetDevice();

  if (pathname === AppRoutes.OUTLAY || pathname === AppRoutes.PROFIT) {
    return (
      <>
        {isTabletAndDesktop && <MainPageTabletAndDesktop />}
        {isMobile && <MainPageMobile />}
      </>
    );
  }

  if (
    pathname === AppRoutes.RECORD_OUTLAY ||
    pathname === AppRoutes.RECORD_PROFIT
  ) {
    return <>{isTabletAndDesktop && <RecordPageTabletAndDesktop />}</>;
  }

  return <></>;
};
