import { ActionTree } from 'vuex';
import axiosClient from '../../axios';

import { Survey } from '../../interfaces/SurveyInterface';
import { StoreApp } from '../state';

const actionSurvey: ActionTree<StoreApp, StoreApp> = {
  /**
   * Actualiza o crea survey
   * @param commit
   * @param survey
   * @returns {Promise<Survey>}
   */
  async saveSurvey({ commit }, survey: Survey): Promise<Survey> {
    try {
      if (survey.id) {
        const { data } = await axiosClient.put<Survey>(
          `/surveys/${survey.id}`,
          survey
        );
        commit('updateSurvey', data);
        return data;
      } else {
        const { data } = await axiosClient.post<Survey>('/surveys', survey);
        commit('saveSurvey', data);
        return data;
      }
    } catch (e) {
      throw e;
    }
  },
};

export default actionSurvey;
