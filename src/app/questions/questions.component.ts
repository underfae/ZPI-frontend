import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Question } from '../core/models/question.model';
import { Subject } from '../core/models/subject.model';
import { QuestionService } from '../core/services/question.service';
import { SubjectService } from '../core/services/subject.service';
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
export class QuestionsComponent implements OnInit {
  constructor(
    protected dialog: MatDialog,
    protected subjectService: SubjectService,
    protected questionService: QuestionService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  elements: Subject[] = [];
  dataSource;
  displayedColumns: string[] = ['name', 'obieralny', 'term', 'options'];

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe((subjects) => {
      this.dataSource = new MatTableDataSource<Subject>(subjects);
    });
  }

  expandedElement: Subject | null;

  getDataSource() {
    this.subjectService.getSubjects().subscribe((subjects) => {
      this.dataSource = new MatTableDataSource<Subject>(subjects);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteQuestion(question: Question): void {
    this.questionService.deleteQuestion(question._id).subscribe(
      () => {
        console.log('Question was deleted successfully');
        this.getDataSource();
        this.changeDetectorRefs.detectChanges();
      },
      () => {
        console.log('Question could not be deleted');
      }
    );
  }

  editQuestion(question: Question): void {
    const dialogRef = this.dialog.open(AddQuestionDialogComponent, {
      width: '500px',
      data: {
        name: question.name,
        answer: question.answer,
        submitButton: 'Edytuj',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      const data = {
        ...result,
        _id: question._id,
        subjectId: question.subjectId,
      };
      this.questionService.editQuestion(data).subscribe(
        () => {
          console.log('Question was edited successfully');
          this.getDataSource();
          this.changeDetectorRefs.detectChanges();
        },
        () => {
          console.log('Question could not be edited');
        }
      );
    });
  }

  addQuestion(subjectId: string): void {
    const dialogRef = this.dialog.open(AddQuestionDialogComponent, {
      width: '500px',
      data: { name: '', answer: '', submitButton: 'Utwórz' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      const data = { ...result, subjectId: subjectId };

      this.questionService.createQuestion(data).subscribe(
        () => {
          console.log('Question was created successfully');
          this.getDataSource();
          this.changeDetectorRefs.detectChanges();
        },
        () => {
          console.log('Question could not be created');
        }
      );
    });
  }

  checkObieralny(obieralny: string): string {
    return obieralny == 'true' ? 'obieralny' : 'nieobieralny';
  }
}
