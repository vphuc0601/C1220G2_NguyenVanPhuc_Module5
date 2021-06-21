import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL= 'http://localhost:3000/customerList';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL+ '/' + id);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL, customer)
  }

  deleteCustomer(id: number | undefined): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + "/" + id)
  }

  updateCustomer(id: number, customer: Customer): Observable<void> {
    return this.httpClient.put<void >(this.API_URL + "/" + customer.id, customer)
  }

  searchCustomer(name: string | undefined, address: string | undefined): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + "?name_like=" + name +"&address_like="+address )
  }
}
