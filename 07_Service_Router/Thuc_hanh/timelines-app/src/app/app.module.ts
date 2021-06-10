import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        RoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
