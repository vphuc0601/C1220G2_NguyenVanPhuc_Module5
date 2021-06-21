import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  employeeForm: FormGroup;
  public id: number;
  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe();

    this.router.navigate(['/employee/list']);
  }
}
