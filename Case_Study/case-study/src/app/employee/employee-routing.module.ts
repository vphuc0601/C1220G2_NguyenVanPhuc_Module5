import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';
import {EmployeeDeleteComponent} from './employee-delete/employee-delete.component';



const routes: Routes = [
  {
    path: 'list',
    component: EmployeeListComponent
  }, {
    path: 'create',
    component: EmployeeCreateComponent
  }, {
    path: 'update/:id',
    component: EmployeeUpdateComponent
  }, {
    path: 'delete/:id',
    component: EmployeeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
