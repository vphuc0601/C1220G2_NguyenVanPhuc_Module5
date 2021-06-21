import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute) {

    let idStudent = this.activatedRoute.snapshot.params.idStudent;
    this.student = new Student();

    this.studentService.findById(Number(idStudent)).subscribe((data) => {
      this.student = data;
    });
  }

  ngOnInit(): void {
  }
}
