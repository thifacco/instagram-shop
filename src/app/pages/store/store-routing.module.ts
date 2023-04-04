import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './views/product/product.component';
import { StoreComponent } from './views/store/store.component';

const routes: Routes = [
  {
    path: ':storeId', 
    component: StoreComponent
  },
  {
    path: ':storeId/product/:productId',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
