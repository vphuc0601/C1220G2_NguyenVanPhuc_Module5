import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CustomerModule} from "./customer/customer.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {RoutingModule} from "./routing.module";
import {NgxPaginationModule} from "ngx-pagination";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BdsModule} from "./bds/bds.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    SharedModule,
    RouterModule,
    CustomerModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    BdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
