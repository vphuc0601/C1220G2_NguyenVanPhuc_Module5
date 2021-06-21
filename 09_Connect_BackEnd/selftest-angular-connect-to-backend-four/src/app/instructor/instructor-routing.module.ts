import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InstructorPageComponent} from "./instructor-page/instructor-page.component";

let routes: Routes = [
  {path: 'instructor', component: InstructorPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class InstructorRoutingModule { }
