import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Student } from '../../core/models/student.model';
import { Subject } from '../../core/models/subject.model';
import { Question } from '../../core/models/question.model';
import { QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  max: number = 5;

  subjectsData: Partial<Subject>[] = [
    {
      _id: '1',
      name: 'Komputerowe przetwarzanie obrazu',
      term: 'I',
      questions: [],
    },
    {
      _id: '2',
      name: 'Modelowanie przestrzenne',
      term: 'III',
      questions: [],
    },
    {
      _id: '3',
      name: 'Komunikacja czlowiek - komputer',
      term: 'I',
      questions: [],
    },
    {
      _id: '4',
      name: 'Technologie audiowizualne',
      term: 'V',
      questions: [],
    },
    {
      _id: '5',
      name: 'Akwizycja i obróbka dźwięku',
      term: 'I',
      questions: [],
    },
    {
      _id: '1',
      name: 'Komputerowe przetwarzanie obrazu',
      term: 'I',
      questions: [],
    },
    {
      _id: '2',
      name: 'Modelowanie przestrzenne',
      term: 'I',
      questions: [],
    },
    {
      _id: '3',
      name: 'Komunikacja czlowiek - komputer',
      term: 'II',
      questions: [],
    },
    {
      _id: '4',
      name: 'Technologie audiowizualne',
      term: 'I',
      questions: [],
    },
    {
      _id: '5',
      name: 'Akwizycja i obróbka dźwięku',
      term: 'IV',
      questions: [],
    },
  ];

  subjectOpen: boolean = false;
  student: Student;
  examMode: boolean = false;
  date: Date;
  questions: Question[];
  changeButton: boolean = true;

  constructor(protected router: Router, protected route: ActivatedRoute, protected questionService: QuestionService) {
    if (this.router.getCurrentNavigation() !== null) {
      this.student = this.router.getCurrentNavigation()?.extras.state?.data;
    }
  }

  ngOnInit(): void {
    if (!this.student) {
      this.router.navigate(['/dashboard']);
    }
  }

  showMore(): void {
    this.max = this.max + 5;
  }
  downloadSubjects(): void {
    this.subjectOpen = true;
  }

  startExam(): void {
    this.examMode = true;
    this.questionService.randomQuestion().subscribe(
      (result) => {
        this.questions = result
      }
    );
  }

  startAgain(): void {
    this.startExam();
    this.changeButton = false;
  }
}
