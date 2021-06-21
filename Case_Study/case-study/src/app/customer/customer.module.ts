import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {RouterModule} from '@angular/router';
import {CustomerRoutingModule} from './customer-routing.module';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CustomerRoutingModule,
    NgbModule,
    FormsModule,

  ]
})
export class CustomerModule { }
