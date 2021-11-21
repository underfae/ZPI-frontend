import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss'],
})
export class StudentPanelComponent implements OnInit {
 

  constructor(protected router:Router, protected route: ActivatedRoute) {}

  ngOnInit(): void {}
  redirect(){
    this.router.navigate(["student-details"])
  }
}
