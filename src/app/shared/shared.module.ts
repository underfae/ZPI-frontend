import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';

import { ReadonlyFieldComponent } from './components/readonly-field/readonly-field.component';
import { StudentPreviewComponent } from './components/student-preview/student-preview.component';

@NgModule({
  declarations: [
    StudentPreviewComponent,
    ReadonlyFieldComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  exports: [
    StudentPreviewComponent,
    ReadonlyFieldComponent
  ]
})
export class SharedModule { }
