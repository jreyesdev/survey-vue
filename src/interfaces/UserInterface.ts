import { ErrorResponseApi } from './ErrorResponseApiInterface';

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
