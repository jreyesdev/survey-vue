import { QuestionSurvey } from './QuestionInterface';

export interface NewSurvey {
  title: string | null;
  status: TypeSurvey;
  image: string | null;
  description: string | null;
  expire_date: string | null;
  questions: QuestionSurvey[] | [];
}

export interface Survey {
  id: number;
  title: string;
  slug: string;
  status: TypeSurvey;
  image: string;
  description: string;
  expire_date: string;
  questions?: QuestionSurvey[];
  created_at: string;
  updated_at: string;
}

export type TypeSurvey = 'draft' | 'active' | boolean;
