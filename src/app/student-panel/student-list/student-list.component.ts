import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../../core/models/student.model';
import { StudentsService } from '../../core/services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  limitList: number = 6;
  @ViewChild('showMore') showMore: ElementRef;

  constructor(
    private studentService: StudentsService,
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe((res) => {
      this.students = res;
    });
  }

  showMoreStudents(): void {
    if(this.showMore.nativeElement.innerHTML == "Zobacz więcej studentów"){
      this.limitList += 7;
      this.showMore.nativeElement.innerHTML = "Zobacz mniej studentów"
    } else {
      this.limitList = 6;
      this.showMore.nativeElement.innerHTML = "Zobacz więcej studentów";
    }
  }

  showDetails(student: Student): void {
    this.router.navigate(['student-panel/4'], { state: { data: student } });
  }
}
