import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  userData = {
    name: 'Katarzyna Pycińska',
    specialization: 'Informatyka',
    school: 'Politechnika Krakowska',
    album_number: '126429',
    adress: 'ul. Lea 334',
    region: 'małopolskie',
    city: 'Kraków',
    birthdate: '05.06.1998',
    pesel: '12345678921',
    birthplace: 'Kraków',
    date: '17.03.2022r.',
    topic: 'Intraktywny elektroniczny dziennik zajęć',
    promoter: 'Jan Kowalski',
    reviewer: 'Anna Smoła'
  };
  subjectOpen:boolean=false;

  constructor() {}
  downloadSubjects(){
    this.subjectOpen=true;
  }
  ngOnInit(): void {}
}
