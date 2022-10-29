import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from 'types/types';

interface ListOutlayAndProfit {
  id: string;
  data: string;
  description: string;
  category: string;
  wastes: string;
}

const listsOutlay: ListOutlayAndProfit[] = [
  {
    id: '0',
    data: '24.10.2022',
    description: 'Поездка в метро',
    category: 'Транспорт',
    wastes: '-30.00 ₽',
  },
  {
    id: '1',
    data: 'data',
    description: 'description',
    category: 'category',
    wastes: 'wastes',
  },
  {
    id: '2',
    data: 'data',
    description: 'description',
    category: 'category',
    wastes: 'wastes',
  },
  {
    id: '3',
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
  {
    id: '4',
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
  {
    id: '5',
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
];

const listProfit: ListOutlayAndProfit[] = [
  {
    id: '0',
    data: '10.10.2022',
    description: 'Моя зп',
    category: 'Зп',
    wastes: '30 000.00 ₽',
  },
  {
    id: '1',
    data: '25.10.2022',
    description: 'Моя зп',
    category: 'Зп',
    wastes: '35 000.00 ₽',
  },
  {
    id: '2',
    data: 'data',
    description: 'description',
    category: 'category',
    wastes: 'wastes',
  },
  {
    id: '3',
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
  {
    id: '4',
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
  {
    id: '5',
    data: '',
    description: '',
    category: '',
    wastes: '',
  },
];

export const useListOutlayAndProfit = () => {
  const [currentList, setCurrentList] = useState<ListOutlayAndProfit[]>([]);
  const { pathname } = useLocation();

  const isOutlay = pathname === AppRoutes.OUTLAY;
  const isShowProfit = pathname === AppRoutes.PROFIT;

  useEffect(() => {
    if (isOutlay) {
      setCurrentList(listsOutlay);
    }

    if (isShowProfit) {
      setCurrentList(listProfit);
    }
  }, [pathname, isOutlay, isShowProfit]);

  const handleClickDelete = (id: string) => {
    console.log(id);
  };

  return { handleClickDelete, currentList };
};
