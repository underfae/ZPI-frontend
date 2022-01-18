import { Question } from './question.model';

export class Subject {
  _id: string;
  name: string;
  term: string;
  questions: Question[];
}
