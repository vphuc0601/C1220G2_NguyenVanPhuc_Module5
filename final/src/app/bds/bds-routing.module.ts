import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BdsListComponent} from "./bds-list/bds-list.component";
import {BdsCreateComponent} from "./bds-create/bds-create.component";

const routes: Routes = [
  {
    path: 'list',
    component: BdsListComponent
  },
  {
    path: 'create',
    component: BdsCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BdsRoutingModule { }
