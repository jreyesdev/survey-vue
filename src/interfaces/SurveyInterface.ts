import { QuestionSurvey } from './QuestionInterface';

export interface Survey {
  id: number;
  title: string;
  slug: string;
  status: TypeSurvey;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
  expire_date: string;
  questions?: QuestionSurvey[];
}

export type TypeSurvey = 'draft' | 'active';
