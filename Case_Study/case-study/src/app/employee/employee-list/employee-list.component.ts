import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    // @ts-ignore
    this.employee = this.employeeService.getAll().subscribe(data => {
      this.employee = data;
    }, (error) => {
      console.log('Get employeeList ' + error)
    });
  }

}
