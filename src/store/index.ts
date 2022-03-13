import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseStore } from 'vuex';

type User = {
  name: string;
};

type UserAuth = {
  data: User | null;
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
      data: null,
      token: null,
    },
  },
  getters: {},
  actions: {},
  modules: {},
  mutations: {},
});
