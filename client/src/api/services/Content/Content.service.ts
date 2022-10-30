import { Axios } from 'api';
import { LinksApi, ResponseListCategoryApi } from 'types/types';

export const ContentService = {
  async getCategoryList(): Promise<ResponseListCategoryApi> {
    return Axios.get(LinksApi.CATEGORY_LIST);
  },
};
