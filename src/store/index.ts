import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseStore } from 'vuex';

import actions from './actions';
import mutations from './mutations';
import state, { StoreApp } from './state';

export const key: InjectionKey<Store<StoreApp>> = Symbol();

export function useStore() {
  return baseStore(key);
}

export const store = createStore<StoreApp>({
  state,
  getters: {},
  actions,
  modules: {},
  mutations,
});
