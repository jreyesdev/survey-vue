import { MutationTree } from 'vuex';
import { StoreApp } from '..';
import { Survey } from '../../interfaces/SurveyInterface';

const surveyMutation: MutationTree<StoreApp> = {
  saveSurvey: (s, survey: Survey) => {
    s.surveys = [...s.surveys, survey];
  },
  updateSurvey: (s, survey: Survey) => {
    s.surveys = s.surveys.map((su) => (su.id === survey.id ? survey : su));
  },
};

export default surveyMutation;
