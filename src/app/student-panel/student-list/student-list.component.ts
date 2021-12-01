import { StudentsService } from '../../students.service';
import { Student } from '../../models/interfaces/student';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  limitList: number = 6;
  @ViewChild('showMore') showMore: ElementRef;

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(res =>{
      this.students = res;
    })
  }

  showMoreStudents(): void {
    this.limitList = (this.showMore.nativeElement.innerHTML == "Zobacz więcej studentów" ? 6 : 13);
    this.showMore.nativeElement.innerHTML = "Zobacz mniej studentów";
  }

  showDetails(studentId): void {
    window.location.href = "http://localhost:4200/student-panel/" + studentId; //do zmiany!
  }
}
