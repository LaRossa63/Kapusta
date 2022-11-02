import React, { useEffect, useState } from 'react';
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
import { useCurrentPage } from 'hooks';

interface ListOutlayAndProfit {
  id: number;
  icon: any;
  description: string;
}

const ListIconsOutlay: ListOutlayAndProfit[] = [
  {
    id: 0,
    icon: Products,
    description: 'продукты',
  },
  // {
  //   id: 1,
  //   icon: <Alcohol />,
  //   description: 'алкоголь',
  // },
  // {
  //   id: 2,
  //   icon: <Kite />,
  //   description: 'развлечение',
  // },
  // {
  //   id: 3,
  //   icon: <Health />,
  //   description: 'здоровье',
  // },
  // {
  //   id: 4,
  //   icon: <Transport />,
  //   description: 'транспорт',
  // },
  // {
  //   id: 5,
  //   icon: <EverythingHome />,
  //   description: 'все для дома',
  // },
  // {
  //   id: 6,
  //   icon: <Technic />,
  //   description: 'техника',
  // },
  // {
  //   id: 7,
  //   icon: <CommunalCommunication />,
  //   description: 'коммуналка, связь',
  // },
  // {
  //   id: 8,
  //   icon: <SportsHobbies />,
  //   description: 'спорт, хобби',
  // },
  // {
  //   id: 9,
  //   icon: <Education />,
  //   description: 'образование',
  // },
  // {
  //   id: 10,
  //   icon: <Other />,
  //   description: 'прочее',
  // },
];

const ListIconProfit: ListOutlayAndProfit[] = [
  // {
  //   id: 0,
  //   icon: <PayDay />,
  //   description: 'зп',
  // },
  // {
  //   id: 1,
  //   icon: <AdditionallyPayDay />,
  //   description: 'доп. доход',
  // },
];

export const useGetRecordList = () => {
  const { isOpenRecordOutlay, isOpenRecordProfit } = useCurrentPage();
  const [currentList, setCurrentList] = useState<ListOutlayAndProfit[]>([]);

  useEffect(() => {
    if (isOpenRecordOutlay()) {
      setCurrentList(ListIconsOutlay);
      return;
    }

    if (isOpenRecordProfit()) {
      setCurrentList(ListIconProfit);
      return;
    }
  }, [isOpenRecordOutlay, isOpenRecordProfit]);

  const handleClickIcon = (id: number) => {
    console.log(id);
  };

  return { handleClickIcon, currentList };
};
