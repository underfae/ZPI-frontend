import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from '../core/models/subject.model';
import { AddQuestionDialogComponent } from '../shared/components/add-question-dialog/add-question-dialog.component';
export interface SearchResponse {
  document: string;
  timestamp: number;
}
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class QuestionsComponent {

  constructor(protected dialog: MatDialog){}
  elements: Partial<Subject>[] = [
    {
      id: '1',
      subject: 'Komputerowe przetwarzanie obrazu',
      study: 'Informatyka',
      specialization: 'Grafika komputerowa i Multimedia',
      questions: [
        {
          id: '1',
          name: 'Cechy dźwięku: wysokość, barwa, głośność ( także inne: „twardość”, „jasność” „klarowność” itp.) oraz ich związek z parametrami fizycznymi.',
          answer: '',
        },
        {
          id: '2',
          name: 'Helmholtza teoria percepcji wysokości oraz wrażenia konsonansu i dysonansu.',
          answer: '',
        },
        {
          id: '3',
          name: 'Pochodzenie i rodzaje skal muzycznych. Strój „naturalny” i równomiernie temperowany.',
          answer: '',
        },
        {
          id: '4',
          name: 'Formy muzyki europejskiej i ich związek z fizycznymi własnościami dźwięku: organum, polifonia imitacyjna (fuga, a interwał kwinty), forma okresowa, allegro sonatowe.',
          answer: '',
        },
      ],
    },
    {
      id: '1',
      subject: 'Komputerowe przetwarzanie obrazu',
      study: 'Informatyka',
      specialization: 'Grafika komputerowa i Multimedia',
      questions: [
        {
          id: '1',
          name: 'Cechy dźwięku: wysokość, barwa, głośność ( także inne: „twardość”, „jasność” „klarowność” itp.) oraz ich związek z parametrami fizycznymi.',
          answer: '',
        },
        {
          id: '2',
          name: 'Helmholtza teoria percepcji wysokości oraz wrażenia konsonansu i dysonansu.',
          answer: '',
        },
        {
          id: '3',
          name: 'Pochodzenie i rodzaje skal muzycznych. Strój „naturalny” i równomiernie temperowany.',
          answer: '',
        },
        {
          id: '4',
          name: 'Formy muzyki europejskiej i ich związek z fizycznymi własnościami dźwięku: organum, polifonia imitacyjna (fuga, a interwał kwinty), forma okresowa, allegro sonatowe.',
          answer: '',
        },
      ],
    },
    {
      id: '1',
      subject: 'Komputerowe przetwarzanie obrazu',
      study: 'Informatyka',
      specialization: 'Grafika komputerowa i Multimedia',
      questions: [
        {
          id: '1',
          name: 'Cechy dźwięku: wysokość, barwa, głośność ( także inne: „twardość”, „jasność” „klarowność” itp.) oraz ich związek z parametrami fizycznymi.',
          answer: '',
        },
        {
          id: '2',
          name: 'Helmholtza teoria percepcji wysokości oraz wrażenia konsonansu i dysonansu.',
          answer: '',
        },
        {
          id: '3',
          name: 'Pochodzenie i rodzaje skal muzycznych. Strój „naturalny” i równomiernie temperowany.',
          answer: '',
        },
        {
          id: '4',
          name: 'Formy muzyki europejskiej i ich związek z fizycznymi własnościami dźwięku: organum, polifonia imitacyjna (fuga, a interwał kwinty), forma okresowa, allegro sonatowe.',
          answer: '',
        },
      ],
    },
    {
      id: '1',
      subject: 'lalal',
      study: 'biologia',
      specialization: 'Grafika komputerowa i Multimedia',
      questions: [
        {
          id: '1',
          name: 'Cechy dźwięku: wysokość, barwa, głośność ( także inne: „twardość”, „jasność” „klarowność” itp.) oraz ich związek z parametrami fizycznymi.',
          answer: '',
        },
        {
          id: '2',
          name: 'Helmholtza teoria percepcji wysokości oraz wrażenia konsonansu i dysonansu.',
          answer: '',
        },
        {
          id: '3',
          name: 'Pochodzenie i rodzaje skal muzycznych. Strój „naturalny” i równomiernie temperowany.',
          answer: '',
        },
        {
          id: '4',
          name: 'Formy muzyki europejskiej i ich związek z fizycznymi własnościami dźwięku: organum, polifonia imitacyjna (fuga, a interwał kwinty), forma okresowa, allegro sonatowe.',
          answer: '',
        },
      ],
    },
    {
      id: '1',
      subject: 'Komputerowe przetwarzanie obrazu',
      study: 'Informatyka',
      specialization: 'Grafika komputerowa i Multimedia',
      questions: [
        {
          id: '1',
          name: 'Cechy dźwięku: wysokość, barwa, głośność ( także inne: „twardość”, „jasność” „klarowność” itp.) oraz ich związek z parametrami fizycznymi.',
          answer: '',
        },
        {
          id: '2',
          name: 'Helmholtza teoria percepcji wysokości oraz wrażenia konsonansu i dysonansu.',
          answer: '',
        },
        {
          id: '3',
          name: 'Pochodzenie i rodzaje skal muzycznych. Strój „naturalny” i równomiernie temperowany.',
          answer: '',
        },
        {
          id: '4',
          name: 'Formy muzyki europejskiej i ich związek z fizycznymi własnościami dźwięku: organum, polifonia imitacyjna (fuga, a interwał kwinty), forma okresowa, allegro sonatowe.',
          answer: '',
        },
      ],
    },
  ];

  displayedColumns: string[] = [
    'subject',
    'study',
    'specialization',
    'options',
  ];

  question: '';
  answer: '';

  dataSource = new MatTableDataSource<Partial<Subject>>(this.elements);
  expandedElement: Subject | null;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteQuestion(subjectId: string): void {}

  editQuestion(subjectId: string): void {}

  addQuestion(subjectId: string): void {

    const dialogRef = this.dialog.open(AddQuestionDialogComponent, {
      width: '500px',
      data: { question: this.question, answer: this.answer },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result)
    });

    
  }
}
