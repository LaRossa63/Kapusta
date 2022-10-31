export enum AppRoutes {
  OUTLAY = '/outlay',
  PROFIT = '/profit',

  RECORD_OUTLAY = '/record/outlay',
  RECORD_PROFIT = '/record/profit',

  SIGNUP = 'signup',
  SIGNIN = 'signin',
}

export enum KeyApi {
  CHECK_AUTH = 'auth',

  CATEGORY_LIST = 'category_list',

  OUTLAY_LIST = 'outlay_list',
  PROFIT_LIST = 'profit_list',
}

export enum KeyApp {
  CONTROLS_VALUE = 'controls_value',
}

export enum LinksApi {
  BASE_URL = 'http://localhost:4000/api',

  USER_SIGN_UP = '/registration',
  USER_SIGN_IN = '/login',
  USER_LOGOUT = '/logout',
  USER_REFRESH_TOKEN = '/refresh',

  CATEGORY_LIST = '/category_list',

  OUTLAY = '/outlay',
  PROFIT = '/profit',
}

export interface SignInDTO {
  email: string;
  password: string;
}

export interface SignUpDTO {
  email: string;
  nickName: string;
  password: string;
}

export enum StandardsValidateForm {
  EMAIL_MIN = 6,

  PASSWORD_MIN = 6,
  PASSWORD_MAX = 16,

  NICK_NAME_MIN = 3,
  NICK_NAME_MAX = 12,
}

export interface UserApi {
  id: string;
  email: string;
  nickName: string;
  isActivated: boolean;
}

export interface AuthResponseApi {
  user: UserApi;

  accessToken: string;
  refreshToken: string;
}

export interface Category {
  _id: string;
  text: string;
}

export interface ResponseListCategoryApi {
  outlay: Category[];
  profit: Category[];
}

export interface OutlayAndProfitDTO {
  id: string;
  data: string;
  description: string;
  category: string;
  amount: string;
}

export interface ResponseOutlayAndProfitApi {
  id: string;
  data: string;
  description: string;
  category: string;
  amount: string;
}
