import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import {RouterModule} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FormDirective} from "./customer-create/FormDirective";

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
    FormDirective,
    CustomerUpdateComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    NgbPaginationModule
  ]
})
export class CustomerModule { }
