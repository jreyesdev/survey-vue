import { ErrorResponseApi } from './ErrorResponseApiInterface';

export type User = {
  name: string;
  email: string;
  imageUrl: string;
};

export type UserAuth = {
  data: User | {};
  token: string | null;
};

export interface UserFormRegister {
  name: string | null;
  email: string | null;
  password: string | null;
  password_confirmation: string | null;
}

export interface UserFormLogin {
  email: string | null;
  password: string | null;
  remember: boolean;
}

export type ErrorUserLogin = ErrorResponseApi<UserFormLogin>;

export type ErrorUserRegister = ErrorResponseApi<UserFormRegister>;
