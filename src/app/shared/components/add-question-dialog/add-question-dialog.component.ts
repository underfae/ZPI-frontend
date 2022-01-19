import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-question-dialog',
  templateUrl: './add-question-dialog.component.html',
  styleUrls: ['./add-question-dialog.component.scss']
})
export class AddQuestionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuestionData,
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface QuestionData {
  name: string;
  answer: string;
  submitButton: string;
}
