import { MutationTree } from 'vuex';
import { StoreApp } from '..';
import authMutation from './auth.mutation';
import surveyMutation from './survey.mutation';

const mutations: MutationTree<StoreApp> = {
  ...authMutation,
  ...surveyMutation,
};

export default mutations;
