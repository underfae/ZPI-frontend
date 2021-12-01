import { Subject } from './subject.model';

export class Student {
  id: string;
  name: string;
  study: string;
  specialization: string;
  albumnumber: string;
  address: {
    street: string;
    houseNumber: string;
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
