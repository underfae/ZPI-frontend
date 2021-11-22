import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentPanelComponent } from './student-panel.component';

const routes: Routes = [
  {
    path: '',
    component: StudentPanelComponent,
    children: [
      { path: '', component: StudentListComponent },
      { path: ':id', component: StudentDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPanelRoutingModule {}
