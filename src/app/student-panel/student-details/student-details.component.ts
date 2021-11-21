import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  userData = {
    name: 'Katarzyna Pycińska',
    kierunek: 'Informatyka',
    uczelnia: 'Politechnika Krakowska',
    nr_albumu: '126429',
    adres: 'ul. Lea 334',
    wojewodztwo: 'małopolskie',
    city: 'Kraków',
    data_urodzenia: '05.06.1998',
    pesel: '12345678921',
    miejsce_urodzenia: 'Kraków',
  };

  constructor() {}

  ngOnInit(): void {}
}
