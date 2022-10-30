import { Axios } from 'api';

import { AuthResponseApi, LinksApi, SignInDTO, SignUpDTO } from 'types/types';

export const AuthService = {
  async signUp(body: SignUpDTO): Promise<AuthResponseApi> {
    return Axios.post(LinksApi.USER_SIGN_UP, body);
  },

  async signIn(body: SignInDTO): Promise<AuthResponseApi> {
    return Axios.post(LinksApi.USER_SIGN_IN, body);
  },

  async checkAuth(): Promise<AuthResponseApi> {
    return Axios.get(LinksApi.USER_REFRESH_TOKEN);
  },

  async logout(): Promise<void> {
    return Axios.post(LinksApi.USER_LOGOUT);
  },
};
