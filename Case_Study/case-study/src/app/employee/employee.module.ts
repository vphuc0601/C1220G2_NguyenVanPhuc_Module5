import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import {ReactiveFormsModule} from '@angular/forms';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeDeleteComponent} from './employee-delete/employee-delete.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeDeleteComponent,
    EmployeeUpdateComponent,
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class EmployeeModule {
}
