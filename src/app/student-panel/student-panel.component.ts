import { StudentsService } from './../students.service';
import { Student } from './../models/interfaces/student';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})

export class StudentPanelComponent implements OnInit {

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
    console.log(this.showMore.nativeElement.innerHTML);
  }

}



