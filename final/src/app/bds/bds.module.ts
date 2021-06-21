import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BdsRoutingModule } from './bds-routing.module';
import { BdsListComponent } from './bds-list/bds-list.component';
import { BdsCreateComponent } from './bds-create/bds-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    BdsListComponent,
    BdsCreateComponent
  ],
  imports: [
    CommonModule,
    BdsRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    NgbPaginationModule
  ]
})
export class BdsModule { }
