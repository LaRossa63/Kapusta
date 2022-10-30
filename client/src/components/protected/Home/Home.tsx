import React from 'react';
import { useLocation } from 'react-router-dom';

import { useGetDevice } from 'hooks';
import { AppRoutes } from 'types/types';

import {
  MainPage as MainPageTabletAndDesktop,
  RecordPage as RecordPageTabletAndDesktop,
} from './Device/TabletAndDesktop';

import {
  MainPage as MainPageMobile,
  RecordPage as RecordPageMobile,
} from './Device/Mobile';
import { useGetListCategory } from 'api/services/Content';

export const Home = () => {
  const { pathname } = useLocation();
  const { isMobile, isTabletAndDesktop } = useGetDevice();

  const { isLoading } = useGetListCategory();

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

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
    return (
      <>
        {isTabletAndDesktop && <RecordPageTabletAndDesktop />}
        {isMobile && <RecordPageMobile />}
      </>
    );
  }

  return <></>;
};
