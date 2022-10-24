import { useMediaQuery } from 'react-responsive';

export const useGetDevice = () => {
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 767 });
  const isTab = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTabAndDesktop = useMediaQuery({ minWidth: 768 });

  return { isDesktop, isTab, isMobile, isTabAndDesktop };
};
