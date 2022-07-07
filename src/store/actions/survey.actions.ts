import { ActionTree } from 'vuex';
import { StoreApp } from '..';
import axiosClient from '../../axios';
import { Survey } from '../../interfaces/SurveyInterface';

const actionSurvey: ActionTree<StoreApp, StoreApp> = {
  /**
   * Actualiza o crea survey
   * @param param0
   * @param survey
   * @returns {Promise<Survey>}
   */
  async saveSurvey({ commit }, survey: Survey): Promise<Survey> {
    try {
      if (survey.id) {
        const { data } = await axiosClient.put(`/surveys/${survey.id}`, survey);
        commit('updateSurvey', data);
        return data;
      } else {
        const { data } = await axiosClient.post('/surveys', survey);
        console.log('saveee', data);
        commit('saveSurvey', data.data);
        return data.data;
      }
    } catch (e) {
      throw e;
    }
  },
};

export default actionSurvey;
