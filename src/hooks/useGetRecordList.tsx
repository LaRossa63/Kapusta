import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from 'types/types';
import {
  Alcohol,
  CommunalCommunication,
  Education,
  EverythingHome,
  Health,
  Kite,
  Other,
  Products,
  SportsHobbies,
  Technic,
  Transport,
  PayDay,
  AdditionallyPayDay,
} from 'images/IconsOutlay';

interface ListOutlayAndProfit {
  id: number;
  icon: any;
  description: string;
}

const ListIconsOutlay: ListOutlayAndProfit[] = [
  {
    id: 0,
    icon: <Products />,
    description: 'продукты',
  },
  {
    id: 1,
    icon: <Alcohol />,
    description: 'алкоголь',
  },
  {
    id: 2,
    icon: <Kite />,
    description: 'развлечение',
  },
  {
    id: 3,
    icon: <Health />,
    description: 'здоровье',
  },
  {
    id: 4,
    icon: <Transport />,
    description: 'транспорт',
  },
  {
    id: 5,
    icon: <EverythingHome />,
    description: 'все для дома',
  },
  {
    id: 6,
    icon: <Technic />,
    description: 'техника',
  },
  {
    id: 7,
    icon: <CommunalCommunication />,
    description: 'коммуналка, связь',
  },
  {
    id: 8,
    icon: <SportsHobbies />,
    description: 'спорт, хобби',
  },
  {
    id: 9,
    icon: <Education />,
    description: 'образование',
  },
  {
    id: 10,
    icon: <Other />,
    description: 'прочее',
  },
];

const ListIconProfit: ListOutlayAndProfit[] = [
  {
    id: 0,
    icon: <PayDay />,
    description: 'за',
  },
  {
    id: 1,
    icon: <AdditionallyPayDay />,
    description: 'доп. доход',
  },
];

export const useGetRecordList = () => {
  const { pathname } = useLocation();
  const [currentList, setCurrentList] = useState<ListOutlayAndProfit[]>([]);

  const isOutlay = pathname === AppRoutes.RECORD_OUTLAY;
  const isShowProfit = pathname === AppRoutes.RECORD_PROFIT;

  useEffect(() => {
    if (isOutlay) {
      setCurrentList(ListIconsOutlay);
      return;
    }

    if (isShowProfit) {
      setCurrentList(ListIconProfit);
      return;
    }
  }, [isOutlay, isShowProfit, pathname]);

  const handleClickIcon = (id: number) => {
    console.log(id);
  };

  return { handleClickIcon, currentList };
};
