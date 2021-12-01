import { ActivatedRoute, Router } from '@angular/router';
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
      questions: [],
    },
    {
      id: '2',
      name: 'Modelowanie przestrzenne',
      term: 'I',
      questions: [],
    },
    {
      id: '3',
      name: 'Komunikacja czlowiek - komputer',
      term: 'I',
      questions: [],
    },
    {
      id: '4',
      name: 'Technologie audiowizualne',
      term: 'I',
      questions: [],
    },
    {
      id: '5',
      name: 'Akwizycja i obróbka dźwięku',
      term: 'I',
      questions: [],
    },
  ];

  subjectOpen: boolean = false;
  student: Student;

  constructor(protected router: Router, protected route: ActivatedRoute) {
    if (this.router.getCurrentNavigation() !== null) {
      this.student = this.router.getCurrentNavigation()?.extras.state?.data;
    }
  }

  ngOnInit(): void {
    if (!this.student) {
      this.router.navigate(['/dashboard']);
    }
  }

  downloadSubjects(): void {
    this.subjectOpen = true;
  }
}
