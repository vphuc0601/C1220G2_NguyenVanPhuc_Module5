import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StudentPageComponent} from "./student-page/student-page.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {StudentUpdateComponent} from "./student-update/student-update.component";
// import {InstructorPageComponent} from "./instructor-page/instructor-page.component";

let routes: Routes = [
  {path: '', redirectTo: 'student', pathMatch: 'full'},
  {path: 'student', component: StudentPageComponent},
  {path: 'student/detail/:idStudent', component: StudentDetailComponent},
  {path: 'student/update/:idStudent', component: StudentUpdateComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StudentRoutingModule { }

