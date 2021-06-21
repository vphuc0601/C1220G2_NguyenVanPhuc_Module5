import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';
import {TimeInterval} from 'rxjs/internal-compatibility';
import {CustomerService} from '../../service/customer.servce';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm: FormGroup
  constructor(private employeeService: EmployeeService,private fb:FormBuilder,private router: Router) { }


  ngOnInit() {
    this.employeeForm  = this.fb.group({
      id: new FormControl(),
      idEmployee: new FormControl('',[Validators.required, Validators.pattern('\'^(NV-)\\\\d{4}$\'')]),
      name: new FormControl('', [Validators.required]),
      dayOfBirth: new FormControl('', [Validators.required,this.validateAge]),
      email: new FormControl('', [Validators.required, Validators.pattern('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')]),
      address: new FormControl('', [Validators.required]),
      idCard: new FormControl("",[Validators.required, Validators.maxLength(10)]),
      phone: new FormControl('',[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      salary: new FormControl('',[Validators.min(0)])
    })
  }
  submit() {
    const employee = this.employeeForm.value;
    this.employeeService.saveEmployee(employee).subscribe(data => {
      this.router.navigate(['/employee/list']),
        (error) => {
          console.log('Not create'+error)
        }
    });
    this.employeeForm.reset();
    this.router.navigate(['/employee/list']);
  }
  validateAge(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {'invalid18': true};
  }
}
