import { TypeQuestion } from '../../interfaces/QuestionInterface';
import { Survey } from '../../interfaces/SurveyInterface';
import { UserAuth } from '../../interfaces/UserInterface';

import questionTypes from './questionTypes.state';
import surveys from './surveys.state';
import user from './user.state';

export type StoreApp = {
  user: UserAuth;
  surveys: Survey[] | [];
  questionTypes: TypeQuestion[];
};

const state: StoreApp = {
  user,
  questionTypes,
  surveys,
};

export default state;
