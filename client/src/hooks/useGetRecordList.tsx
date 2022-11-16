import { useEffect, useState } from 'react';
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
import { useSearchParams } from 'react-router-dom';
import {
  useGetOutlayById,
  useGetProfitById,
} from 'api/services/OutlayAndProfit';
import { ResponseOutlayAndProfitApi } from 'types/types';

interface ListOutlayAndProfit {
  id: string;
  icon: any;
  description: string;
}

enum RecordOutlayId {
  PRODUCTS = 'products',
  ALCOHOL = 'alcohol',
  FUN = 'fun',
  HEALTH = 'health',
  TRANSPORT = 'transport',
  EVERYTHING_HOME = 'everything_home',
  TECHNIC = 'technic',
  COMMUNAL_COMMUNICATION = 'communal_communication',
  SPORT_HOBBIES = 'sports_hobbies',
  EDUCATION = 'education',
  OTHER = 'other',
}

enum RecordProfitId {
  PAYDAY = 'payday',
  ADDITIONALLY_PAYDAY = 'additionally_payday',
}

const ListIconsOutlay: ListOutlayAndProfit[] = [
  {
    id: RecordOutlayId.PRODUCTS,
    icon: Products,
    description: 'продукты',
  },
  {
    id: RecordOutlayId.ALCOHOL,
    icon: Alcohol,
    description: 'алкоголь',
  },
  {
    id: RecordOutlayId.FUN,
    icon: Kite,
    description: 'развлечение',
  },
  {
    id: RecordOutlayId.HEALTH,
    icon: Health,
    description: 'здоровье',
  },
  {
    id: RecordOutlayId.TRANSPORT,
    icon: Transport,
    description: 'транспорт',
  },
  {
    id: RecordOutlayId.EVERYTHING_HOME,
    icon: EverythingHome,
    description: 'все для дома',
  },
  {
    id: RecordOutlayId.TECHNIC,
    icon: Technic,
    description: 'техника',
  },
  {
    id: RecordOutlayId.COMMUNAL_COMMUNICATION,
    icon: CommunalCommunication,
    description: 'коммуналка, связь',
  },
  {
    id: RecordOutlayId.SPORT_HOBBIES,
    icon: SportsHobbies,
    description: 'спорт, хобби',
  },
  {
    id: RecordOutlayId.EDUCATION,
    icon: Education,
    description: 'образование',
  },
  {
    id: RecordOutlayId.OTHER,
    icon: Other,
    description: 'прочее',
  },
];

const ListIconProfit: ListOutlayAndProfit[] = [
  {
    id: RecordProfitId.PAYDAY,
    icon: PayDay,
    description: 'зп',
  },
  {
    id: RecordProfitId.ADDITIONALLY_PAYDAY,
    icon: AdditionallyPayDay,
    description: 'доп. доход',
  },
];

export const useGetRecordList = () => {
  const {
    isOpenRecordOutlay,
    isOpenRecordProfit,
    isOpenMobileCreateOutlay,
    isOpenMobileCreateProfit,
  } = useCurrentPage();
  const [currentList, setCurrentList] = useState<ListOutlayAndProfit[]>([]);
  const [currentGraph, setCurrentGraph] = useState<
    ResponseOutlayAndProfitApi[]
  >([]);
  const [searchParams, setSearchParams] = useSearchParams({ category: '' });
  const selectedCategory = searchParams.get('category');

  const { data: dataOutlay, mutate: getOutlay } = useGetOutlayById();
  const { data: dataProfit, mutate: getProfit } = useGetProfitById();

  useEffect(() => {
    if (dataOutlay?.length === 0 || dataProfit?.length === 0) {
      return;
    }

    if (isOpenRecordOutlay() || isOpenMobileCreateOutlay()) {
      setCurrentGraph(dataOutlay!);
      return;
    }

    if (isOpenRecordProfit() || isOpenMobileCreateProfit()) {
      setCurrentGraph(dataProfit!);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataOutlay, dataProfit]);

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }

    if (isOpenRecordOutlay() || isOpenMobileCreateOutlay()) {
      getOutlay(selectedCategory);
      return;
    }

    if (isOpenRecordProfit() || isOpenMobileCreateProfit()) {
      getProfit(selectedCategory);
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

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

  const handleClickIcon = (id: string) => {
    setSearchParams({ category: id });
  };

  return { handleClickIcon, currentList, selectedCategory, currentGraph };
};
