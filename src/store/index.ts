import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseStore } from 'vuex';

type User = {
  data: {
    name: string;
  };
  token: string | null;
};

type StoreApp = {
  user: User;
};

export const key: InjectionKey<Store<StoreApp>> = Symbol();

export function useStore() {
  return baseStore(key);
}

export const store = createStore<StoreApp>({
  state: {
    user: {
      data: {
        name: 'Jesus',
      },
      token: null,
    },
  },
  getters: {},
  actions: {},
  modules: {},
  mutations: {},
});
