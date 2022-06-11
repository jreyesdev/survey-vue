import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseStore } from 'vuex';

import { UserFormLogin, UserFormRegister } from '../interfaces/UserInterface';
import axiosClient from '../axios';

type User = {
  name?: string;
  email?: string;
  imageUrl?: string;
};

type UserAuth = {
  data: User;
  token: string | null;
};

type StoreApp = {
  user: UserAuth;
};

export const key: InjectionKey<Store<StoreApp>> = Symbol();

export function useStore() {
  return baseStore(key);
}

export const store = createStore<StoreApp>({
  state: {
    user: {
      data: {
        // name: 'Tom Cook',
        // email: 'tom@example.com',
        // imageUrl:
        //   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      token: sessionStorage.getItem('TOKEN'),
    },
  },
  getters: {},
  actions: {
    async register({ commit }, user: UserFormRegister) {
      try {
        const { data } = await axiosClient.post('/register', user);
        commit('setUser', data);
        return data;
      } catch (e) {
        throw e;
      }
    },
    async login({ commit }, user: UserFormLogin) {
      try {
        const { data } = await axiosClient.post('/login', user);
        commit('setUser', data);
        return data;
      } catch (e) {
        throw e;
      }
    },
    async logout({ commit }) {
      try {
        const { data } = await axiosClient.post('/logout');
        commit('logout');
        return data;
      } catch (e) {
        throw e;
      }
    },
  },
  modules: {},
  mutations: {
    logout: (s) => {
      s.user.data = {};
      s.user.token = null;
      sessionStorage.removeItem('TOKEN');
    },
    setUser: (state, response) => {
      state.user.data = response.user;
      state.user.token = response.token;
      sessionStorage.setItem('TOKEN', response.token);
    },
  },
});
