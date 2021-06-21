import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  API_URL= 'http://localhost:3000/customerType';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(this.API_URL);
  }
}
