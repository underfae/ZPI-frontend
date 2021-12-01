import { Component, OnInit } from '@angular/core';
import { Student } from '../../core/models/student.model';
import { Subject } from '../../core/models/subject.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  subjectsData: Subject[] = [
    {
      id: '1',
      name: 'Komputerowe przetwarzanie obrazu',
      term: 'I',
      questions: []
    },
    {
      id: '2',
      name: 'Modelowanie przestrzenne',
      term: 'I',
      questions: []
    },
    {
      id: '3',
      name: 'Komunikacja czlowiek - komputer',
      term: 'I',
      questions: []
    },
    {
      id: '4',
      name: 'Technologie audiowizualne',
      term: 'I',
      questions: []
    },
    {
      id: '5',
      name: 'Akwizycja i obróbka dźwięku',
      term: 'I',
      questions: []
    }
  ];

  userData: Student = {
    id: '1',
    name: 'Katarzyna Pycińska',
    specialization: 'Informatyka',
    study: 'Grafika Komputerowa',
    sex: 'M',
    albumNumber: '126429',
    address: {
      street: 'ul. Lea',
      homeNumber: '334',
      region: 'małopolskie',
      city: 'Kraków',
    },
    birthdate: new Date(),
    pesel: '12345678921',
    birthplace: 'Kraków',
    thesis: {
    topic: 'Intraktywny elektroniczny dziennik zajęć',
    promoter: 'Jan Kowalski',
    reviewer: 'Anna Smoła',
    },
    subjects: this.subjectsData
  };



  subjectOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  downloadSubjects(): void {
    this.subjectOpen = true;
  }

}
