import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-preview',
  templateUrl: './student-preview.component.html',
  styleUrls: ['./student-preview.component.scss']
})
export class StudentPreviewComponent implements OnInit {

  @Input() name: string;
  @Input() sex: string;

  constructor(protected router: Router) {
  }

  ngOnInit(): void {
  }

}
