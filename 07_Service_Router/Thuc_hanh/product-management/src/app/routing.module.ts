import { NgModule } from '@angular/core';
import {ProductListComponent} from './product/product-list/product-list.component';
import {Routes, RouterModule} from '@angular/router';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductUpdateByIdComponent} from './product/product-update-by-id/product-update-by-id.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent},
  {
    path: 'product/update/:id',
    component: ProductUpdateByIdComponent
  }, {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
