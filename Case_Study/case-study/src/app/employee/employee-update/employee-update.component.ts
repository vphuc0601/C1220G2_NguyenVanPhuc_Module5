import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employeeForm: FormGroup;
  public id: number;
  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.employeeForm = new FormGroup({
      id: new FormControl(),
      idEmployee: new FormControl('',[Validators.required, Validators.pattern('\'^(NV-)\\\\d{4}$\'')]),
      name: new FormControl('', [Validators.required]),
      dayOfBirth: new FormControl('', [Validators.required,this.validateAge]),
      email: new FormControl('', [Validators.required, Validators.pattern('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')]),
      address: new FormControl('', [Validators.required]),
      idCard: new FormControl("",[Validators.required, Validators.maxLength(10)]),
      phone: new FormControl('',[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      salary: new FormControl('',[Validators.min(0)])
  });
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    let employee = new Employee();
    this.employeeService.findById(id).subscribe(data =>{
      employee = data;
    }, (error) => {
      console.log('Update' + error)
    }, () => {
      this.employeeForm = new FormGroup({
        id: new FormControl(),
        idEmployee: new FormControl('',[Validators.required, Validators.pattern('\'^(NV-)\\\\d{4}$\'')]),
        name: new FormControl('', [Validators.required]),
        dayOfBirth: new FormControl('', [Validators.required,this.validateAge]),
        email: new FormControl('', [Validators.required, Validators.pattern('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')]),
        address: new FormControl('', [Validators.required]),
        idCard: new FormControl("",[Validators.required, Validators.maxLength(10)]),
        phone: new FormControl('',[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
        salary: new FormControl('',[Validators.min(0)])
      });
    })
  }
  // getEmployee(id: number) {
  //   return this.employeeService.findById(id);
  // }
  updateEmployee(id: number) {
    let employee = Object.assign({}, this.employeeForm.value)
    this.employeeService.updateEmployee(id, employee).subscribe();
    this.router.navigate(['/employee/list'])
  }
  validateAge(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {'invalid18': true};
  }
}
