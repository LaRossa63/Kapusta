import React, { useEffect, useState } from 'react';

import { useGetBalance, useAddBalance } from 'api/services/OutlayAndProfit';
import { BalanceDTO } from 'types/types';

export const useBalance = () => {
  const [balance, setBalance] = useState('0');
  const { data } = useGetBalance();
  const { mutate: addBalance } = useAddBalance();

  useEffect(() => {
    setBalance(data?.balance || '0');
  }, [data]);

  const handleChangeBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(event.target.value);
  };

  const handleClickButton = () => {
    const body: BalanceDTO = {
      balance,
    };

    addBalance(body);
  };

  return { handleChangeBalance, handleClickButton, balance };
};
