import {Injectable} from '@angular/core';
import {Student} from "./student";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class StudentService {

  API_URL = 'http://localhost:3000/studentList';

  constructor(private httpClient: HttpClient) { }

  findById(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(this.API_URL + "/" + studentId);
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  update(student: Student): Observable<void> {
    return this.httpClient.put<void>(this.API_URL + "/" + student.id, student);
  }

  delete(idStudent: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + "/" + idStudent);
  }
}
