import { ActionTree } from 'vuex';
import axiosClient from '../../axios';

import { StoreApp } from '../state';
import {
  ResponseAuthUser,
  UserFormLogin,
  UserFormRegister,
} from '../../interfaces/UserInterface';

const actionAuth: ActionTree<StoreApp, StoreApp> = {
  async register(
    { commit },
    user: UserFormRegister
  ): Promise<ResponseAuthUser> {
    try {
      const { data } = await axiosClient.post<ResponseAuthUser>(
        '/register',
        user
      );
      commit('setUser', data);
      return data;
    } catch (e) {
      throw e;
    }
  },

  async login({ commit }, user: UserFormLogin): Promise<ResponseAuthUser> {
    try {
      const { data } = await axiosClient.post<ResponseAuthUser>('/login', user);
      commit('setUser', data);
      return data;
    } catch (e) {
      throw e;
    }
  },

  async logout({ commit }): Promise<any> {
    try {
      const { data } = await axiosClient.post('/logout');
      commit('logout');
      return data;
    } catch (e) {
      throw e;
    }
  },
};

export default actionAuth;
