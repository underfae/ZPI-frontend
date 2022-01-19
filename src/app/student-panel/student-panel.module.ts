import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentPanelComponent } from "./student-panel.component";
import { StudentPanelRoutingModule } from "./student-panel-routing.module";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    StudentDetailsComponent,
    StudentListComponent,
    StudentPanelComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatButtonModule,
    StudentPanelRoutingModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [StudentPanelComponent]
})
export class StudentPanelModule{}
