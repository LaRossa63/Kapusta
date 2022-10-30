import { useState } from 'react';

import { useSignUp } from 'api/services/Auth';
import { AppRoutes, SignUpDTO, StandardsValidateForm } from 'types/types';
import { useNavigate } from 'react-router-dom';

export const useFormSignUp = () => {
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState<null | string>(null);

  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useSignUp(handleError);

  function handleError(error: any) {
    const { response } = error;

    if (response.status === 400) {
      setError(response.data.message);
      return;
    } else {
      setError('Что-то пошло не так!!!');
    }
  }

  const handleSubmitForm = async () => {
    const resultValidate = validateForm(
      email,
      nickName,
      password,
      passwordRepeat
    );
    if (resultValidate) {
      setError(resultValidate);
      return;
    }

    const user: SignUpDTO = { email, nickName, password };

    await mutateAsync(user);

    setError('');
  };

  const validateForm = (
    email: string,
    nickName: string,
    password: string,
    passwordRepeat: string
  ) => {
    if (email.length < StandardsValidateForm.EMAIL_MIN) {
      return `Почта должна состоять минимум из ${StandardsValidateForm.EMAIL_MIN} символов`;
    }

    if (
      nickName.length < StandardsValidateForm.NICK_NAME_MIN ||
      nickName.length > StandardsValidateForm.NICK_NAME_MAX
    ) {
      return `Имя должно состоять от ${StandardsValidateForm.NICK_NAME_MIN} до ${StandardsValidateForm.NICK_NAME_MAX} символов`;
    }

    if (
      password.length < StandardsValidateForm.PASSWORD_MIN ||
      password.length > StandardsValidateForm.PASSWORD_MAX
    ) {
      return `Пароль должен состоять от ${StandardsValidateForm.PASSWORD_MIN} до ${StandardsValidateForm.PASSWORD_MAX} символов`;
    }

    if (password !== passwordRepeat) {
      return `Пароли должны совпадать`;
    }
  };

  const handleChangeNickName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordRepeat = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordRepeat(event.target.value);
  };

  const handleClickSignIn = () => {
    navigate(`/${AppRoutes.SIGNIN}`);
  };

  return {
    handleSubmitForm,
    handleChangeNickName,
    handleChangeEmail,
    handleChangePassword,
    handleChangePasswordRepeat,
    handleClickSignIn,
    email,
    nickName,
    password,
    passwordRepeat,
    error,
    isLoading,
  };
};
