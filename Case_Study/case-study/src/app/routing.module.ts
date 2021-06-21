import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component';
import {EmployeeDeleteComponent} from './employee/employee-delete/employee-delete.component';
import {EmployeeUpdateComponent} from './employee/employee-update/employee-update.component';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(module => module.EmployeeModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
