import { ActionTree } from 'vuex';
import { StoreApp } from '..';
import actionAuth from './auth.actions';
import actionSurvey from './survey.actions';

const actions: ActionTree<StoreApp, StoreApp> = {
  ...actionAuth,
  ...actionSurvey,
};

export default actions;
