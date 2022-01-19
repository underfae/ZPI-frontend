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
  name: string = '';
  field: string = '';
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
    this.limitList =
      this.showMore.nativeElement.innerHTML == 'Zobacz więcej studentów'
        ? 13
        : 6;
    this.toggleShowMore();
  }

  toggleShowMore(): void {
    if(this.showMore.nativeElement.innerHTML == 'Zobacz więcej studentów'){
      this.showMore.nativeElement.innerHTML = 'Zobacz mniej studentów';
    } else {
      this.showMore.nativeElement.innerHTML = 'Zobacz więcej studentów';
    }
  }

  showDetails(student: Student): void {
    this.router.navigate(['student-panel/4'], { state: { data: student } });
  }

  searchStudent(): void {
    if(this.name != ""){
      this.students = this.students.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    } else if(this.name == "") {
      this.ngOnInit();
    }

  }

  searchField(): void {
    if(this.field != ""){
      this.students = this.students.filter(res => {
        return res.study.toLocaleLowerCase().match(this.field.toLocaleLowerCase());
      });
    } else if(this.field == "") {
      this.ngOnInit();
    }
  }

}
