import { useQuery } from 'react-query';

import { KeyApi } from 'types/types';
import { ContentService } from './Content.service';

export const useGetListCategory = () => {
  return useQuery({
    queryKey: KeyApi.CATEGORY_LIST,
    queryFn: ContentService.getCategoryList,
    staleTime: Infinity,
  });
};
