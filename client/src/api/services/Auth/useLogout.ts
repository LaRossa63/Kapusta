import { queryClient } from 'api/Axios';
import { useMutation } from 'react-query';
import { KeyApi } from 'types/types';

import { AuthService } from './Auth.service';

export const useLogout = () => {
  return useMutation({
    onSuccess: () => {
      localStorage.setItem('token', '');
      queryClient.setQueryData(KeyApi.CHECK_AUTH, null);
    },

    mutationFn: AuthService.logout,
  });
};
