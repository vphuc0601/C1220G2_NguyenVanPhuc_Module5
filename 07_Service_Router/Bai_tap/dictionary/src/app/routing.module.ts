import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
const routes: Routes = [
   {
    path: '',
    component: DictionaryPageComponent,
    children: [
      {
        path: 'dictionary/:key',
        component: DictionaryDetailComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class RoutingModule { }
