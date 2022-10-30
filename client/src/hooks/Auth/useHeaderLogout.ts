import { queryClient } from 'api';
import { useLogout } from 'api/services/Auth';
import { useEffect, useState } from 'react';
import { KeyApi, AuthResponseApi } from 'types/types';

export const useHeaderLogout = () => {
  const [currentName, setCurrentName] = useState('');

  const { mutate } = useLogout();

  useEffect(() => {
    const { user } = queryClient.getQueryData(
      KeyApi.CHECK_AUTH
    ) as AuthResponseApi;
    setCurrentName(user.nickName);
  }, []);

  const handleClickLogout = () => {
    mutate();
  };

  return { handleClickLogout, currentName };
};
