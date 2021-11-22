import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";

import { ReadonlyFieldComponent } from "../shared/components/readonly-field/readonly-field.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentPanelComponent } from "./student-panel.component";
import { StudentPanelRoutingModule } from "./student-panel-routing.module";

@NgModule({
  declarations: [
    ReadonlyFieldComponent,
    StudentDetailsComponent,
    StudentListComponent,
    StudentPanelComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    StudentPanelRoutingModule,
  ],
  providers: [],
  bootstrap: [StudentPanelComponent]
})
export class StudentPanelModule{}
