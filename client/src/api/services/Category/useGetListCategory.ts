import { useQuery } from 'react-query';

import { KeyApi } from 'types/types';
import { CategoryService } from './Category.service';

export const useGetListCategory = () => {
  return useQuery({
    queryKey: KeyApi.CATEGORY_LIST,
    queryFn: CategoryService.getCategoryList,
    staleTime: Infinity,
  });
};
