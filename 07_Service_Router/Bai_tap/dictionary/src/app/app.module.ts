import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import {RouterModule} from '@angular/router';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
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
