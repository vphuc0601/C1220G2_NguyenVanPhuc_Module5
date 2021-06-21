import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bds} from "../model/bds";

@Injectable({
  providedIn: 'root'
})
export class BdsService {
  API_URL= 'http://localhost:3000/bdsList';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Bds[]>{
    return this.httpClient.get<Bds[]>(this.API_URL);
  }

  findById(id: number): Observable<Bds> {
    return this.httpClient.get<Bds>(this.API_URL+ '/' + id);
  }

  saveBds(bds: Bds): Observable<Bds> {
    return this.httpClient.post<Bds>(this.API_URL, bds)
  }


  deleteBds(id: number | undefined): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + "/" + id)

  }

  updateBds(id: number, bds: Bds): Observable<void> {
    return this.httpClient.put<void >(this.API_URL + "/" + bds.id, bds)
  }

  searchBds(dienTich: string, gia: string , huong: string): Observable<Bds[]> {
    return this.httpClient.get<Bds[]>(this.API_URL + "?dienTich_like=" + dienTich + "&gia_like=" + gia+ "&huong_like=" + huong)
  }
}
