import { Question } from "./question.model";

export class Subject {
  id: string;
  name: string;
  term: string;
  questions: Question[];
}
