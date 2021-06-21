import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {StudentRoutingModule} from "./student-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {StudentService} from "./student.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    StudentPageComponent,
    StudentUpdateComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
  ]
})
export class StudentModule { }
