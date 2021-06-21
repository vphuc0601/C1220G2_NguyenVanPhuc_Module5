import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student/student.service";

@Component({
  selector: 'app-instructor-page',
  templateUrl: './instructor-page.component.html',
  styleUrls: ['./instructor-page.component.css']
})
export class InstructorPageComponent implements OnInit {

  constructor(private studentService: StudentService) {
    console.log(this.studentService.findAll());
  }

  ngOnInit(): void {
  }

}
