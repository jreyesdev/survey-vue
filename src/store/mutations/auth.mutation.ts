import { MutationTree } from 'vuex';

import { ResponseAuthUser } from '../../interfaces/UserInterface';
import { StoreApp } from '../state';

const authMutation: MutationTree<StoreApp> = {
  logout: (s) => {
    s.user.data = {};
    s.user.token = null;
    sessionStorage.removeItem('TOKEN');
  },
  setUser: (state, response: ResponseAuthUser) => {
    state.user.data = response.user;
    state.user.token = response.token;
    sessionStorage.setItem('TOKEN', response.token);
  },
};

export default authMutation;
