import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Student } from '../../core/models/student.model';
import { Subject } from '../../core/models/subject.model';
import { Question } from '../../core/models/question.model';

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

  questions: Question[] = [
    {
      id: '1',
      name: 'Co to jest macierz sztywności?',
      answer: "answer"
    },
    {
      id: '2',
      name: 'Przedstawić metody pozyskiwania danych o użytkownikach',
      answer: "answer"
    },
    {
      id: '3',
      name: 'Kompresja obrazu - omówić przykład kompresji stratnej i bezstratnej',
      answer: "answer"
    },
  ];

  subjectOpen: boolean = false;
  student: Student;
  examMode: boolean = false;

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

  startExam(): void {
    this.examMode = true;
  }
}
