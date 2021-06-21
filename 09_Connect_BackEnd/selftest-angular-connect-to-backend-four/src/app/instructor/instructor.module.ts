import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorPageComponent } from './instructor-page/instructor-page.component';
import {StudentRoutingModule} from "../student/student-routing.module";
import {InstructorRoutingModule} from "./instructor-routing.module";



@NgModule({
  declarations: [
    InstructorPageComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
