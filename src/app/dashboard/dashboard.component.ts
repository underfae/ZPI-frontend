import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  temporaryData = [
    {
      student: 'Katarzyna Pycińska',
      date: '17.03.2022r.',
      topic: 'Intraktywny elektroniczny dziennik zajęć',
      promoter: 'Jan Kowalski',
      reviewer: 'Anna Smoła'
    },
    {
      student: 'Patryk Kaczor',
      date: '27.03.2022r.',
      topic: 'Intraktywny elektroniczny dziennik zajęć',
      promoter: 'Jan Kowalski',
      reviewer: 'Anna Smoła'
    },
    {
      student: 'Michał Jackowski',
      date: '27.03.2022r.',
      topic: 'Aplikacja rejestrująca gry w kręgle',
      promoter: 'Jan Kowalski',
      reviewer: 'Anna Smoła'
    }
  ];

  dataSource = this.temporaryData;
  displayedColumns = ['student', 'promoter', 'reviewer', 'topic', 'date'];

  constructor() { }

  ngOnInit(): void {
  }

}
