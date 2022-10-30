import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignIn } from 'api/services/Auth';
import { AppRoutes, SignInDTO } from 'types/types';

export const useFormSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useSignIn(handleError);

  function handleError(error: any) {
    const { response } = error;

    if (response.status === 400) {
      setError(response.data.message);
      return;
    } else {
      setError('Что-то пошло не так');
    }
  }

  const handleSubmitForm = async () => {
    const user: SignInDTO = {
      email,
      password,
    };

    await mutateAsync(user);

    setError('');
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClickSignUp = () => {
    navigate(`/${AppRoutes.SIGNUP}`);
  };

  return {
    handleSubmitForm,
    handleChangeEmail,
    handleChangePassword,
    handleClickSignUp,
    email,
    password,
    isLoading,
    error,
  };
};
