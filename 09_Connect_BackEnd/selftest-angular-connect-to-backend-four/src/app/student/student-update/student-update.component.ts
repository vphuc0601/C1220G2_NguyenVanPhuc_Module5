import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../student";

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css'],
})
export class StudentUpdateComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    // Initial default
    this.studentForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', [Validators.required,
        this.validateAge18])
    });

  }

  ngOnInit(): void {
    let idStudent = this.activatedRoute.snapshot.params.idStudent;
    let student = new Student();

    this.studentService.findById(Number(idStudent)).subscribe((data) => {
      student = data;
    }, (error) => {
      console.log("Student page: " + error);
    }, () => {

      // Binding object student to reactive form
      this.studentForm = new FormGroup({
        id: new FormControl(student.id),
        name: new FormControl(student.name, [Validators.required,
          Validators.pattern('[A-Za-z ]+')]),
        dateOfBirth: new FormControl(student.dateOfBirth, [Validators.required,
          this.validateAge18])
      });

    })
  }

  validateAge18(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {'invalid18': true};
  }

  updateInfoStudent(): void {
    // convert reactive form to object Student
    let student = Object.assign({}, this.studentForm.value);

    this.studentService.update(student).subscribe();

    // this.router.navigateByUrl('');
    this.router.navigate(['student', 'detail', student.id]);
  }
}

