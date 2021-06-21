import { Injectable } from '@angular/core';
import {Employee} from '../model/employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URL= 'http://localhost:3000/employee/employeeList'
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.API_URL);
  }
  saveEmployee(employee): Observable<Employee> {
    // this.customer.push(customer);
    return this.httpClient.post<Employee>(this.API_URL, employee)
  }
  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL+ '/' + id);
  }

  updateEmployee(id: number, employee: Employee): Observable<void> {
    // let index = this.customer.indexOf(this.findById(customer.id));
    // this.customer[index] = customer;
    return this.httpClient.put<void >(this.API_URL + "/" + employee.id, employee)
  }

  deleteEmployee(id: number): Observable<void> {
    // let index = this.customer.indexOf(this.findById(id));
    // this.customer.splice(index, 1);
    return this.httpClient.delete<void>(this.API_URL + "/" + id)
  }
}
