import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css'],
})
export class StudentPageComponent implements OnInit {

  studentList: Student[];

  constructor(private studentService: StudentService) {
    this.studentList = [];
  }

  ngOnInit(): void {
    console.log('abc');
    this.loadList();
  }

  loadList(): void {
    this.studentService.findAll().subscribe((data) => {
      this.studentList = data;
    });
  }

  deleteStudent(id: number): void {
    this.studentService.delete(id).subscribe();
    this.loadList();
  }
}
