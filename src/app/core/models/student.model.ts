import { Subject } from './subject.model';

export class Student {
  id: string;
  name: string;
  study: string;
  specialization: string;
  albumNumber: string;
  address: {
    street: string;
    homeNumber: string;
    region: string;
    city: string;
  };
  birthdate: Date;
  birthplace: string;
  pesel: string;
  sex: string;
  thesis: {
    topic: string;
    promoter: string;
    reviewer: string;
  };
  subjects: Subject[];
}
