import React from 'react';

import { useGetDevice } from 'hooks';
import { Tablet } from './Tablet';

export const Home = () => {
  const { isDesktop, isTablet, isMobile } = useGetDevice();

  return <>{isTablet && <Tablet />}</>;
};
