import { ActionTree } from 'vuex';
import { StoreApp } from '..';
import axiosClient from '../../axios';
import { Survey } from '../../interfaces/SurveyInterface';

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
        console.log('updateSurvey', data);
        commit('updateSurvey', data);
        return data;
      } else {
        const { data } = await axiosClient.post<Survey>('/surveys', survey);
        console.log('saveee', data);
        commit('saveSurvey', data);
        return data;
      }
    } catch (e) {
      throw e;
    }
  },
};

export default actionSurvey;
