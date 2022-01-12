import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';

import { ReadonlyFieldComponent } from './components/readonly-field/readonly-field.component';
import { StudentPreviewComponent } from './components/student-preview/student-preview.component';
import { AddQuestionDialogComponent } from './components/add-question-dialog/add-question-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    StudentPreviewComponent,
    ReadonlyFieldComponent,
    AddQuestionDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    StudentPreviewComponent,
    ReadonlyFieldComponent
  ]
})
export class SharedModule { }
