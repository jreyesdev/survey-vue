import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseStore } from 'vuex';

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
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      token: 'null',
    },
  },
  getters: {},
  actions: {},
  modules: {},
  mutations: {
    logout: (s) => {
      s.user.data = {};
      s.user.token = null;
    },
  },
});
