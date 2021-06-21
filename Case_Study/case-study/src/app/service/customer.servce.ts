import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  API_URL= 'http://localhost:3000/customerList';
  constructor(private httpClient: HttpClient,
              private modal: NgbModal) { }

  getAll(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  saveCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL, customer)
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL+ '/' + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<void> {
    return this.httpClient.put<void >(this.API_URL + "/" + customer.id, customer)
  }

  deleteCustomer(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + "/" + id)
  }

  searchCustomer(name: string, address: string ): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + "?name_like=" + name +"&address_like="+address )
  }
}
