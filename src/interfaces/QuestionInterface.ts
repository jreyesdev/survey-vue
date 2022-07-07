export interface QuestionSurvey {
  id: number | string;
  type: TypeQuestion;
  question: string;
  description: string | null;
  data: DataQuestion | null;
}

export type TypeQuestion = 'select' | 'checkbox' | 'radio' | 'text';

export interface DataQuestion {
  multiple?: boolean;
  options: OptionsDataQuestion[];
}

export interface OptionsDataQuestion {
  uuid: string;
  text: string;
}
