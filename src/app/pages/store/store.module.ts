import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './views/store/store.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './views/product/product.component';


@NgModule({
  declarations: [
    StoreComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }
