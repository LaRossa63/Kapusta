import React from 'react';

import { useCurrentPage, useGetDevice } from 'hooks';

import {
  MainPage as MainPageTabletAndDesktop,
  RecordPage as RecordPageTabletAndDesktop,
} from './Device/TabletAndDesktop';

import {
  MainPage as MainPageMobile,
  RecordPage as RecordPageMobile,
} from './Device/Mobile';
import { useGetListCategory } from 'api/services/Category';
import { ChoosingCategory } from './Device/Mobile/MainPage/components';

export const Home = () => {
  const {
    isOpenOutlay,
    isOpenProfit,
    isOpenRecordOutlay,
    isOpenRecordProfit,
    isOpenMobileCreateOutlay,
    isOpenMobileCreateProfit,
  } = useCurrentPage();
  const { isMobile, isTabletAndDesktop } = useGetDevice();

  const { isLoading } = useGetListCategory();

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  if (isOpenOutlay() || isOpenProfit()) {
    return (
      <>
        {isTabletAndDesktop && <MainPageTabletAndDesktop />}
        {isMobile && <MainPageMobile />}
      </>
    );
  }

  if (isOpenRecordOutlay() || isOpenRecordProfit()) {
    return (
      <>
        {isTabletAndDesktop && <RecordPageTabletAndDesktop />}
        {isMobile && <RecordPageMobile />}
      </>
    );
  }

  if (isOpenMobileCreateOutlay() || isOpenMobileCreateProfit()) {
    return <>{isMobile && <ChoosingCategory />}</>;
  }

  return <></>;
};
