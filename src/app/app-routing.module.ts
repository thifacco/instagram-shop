import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './stores/store/store.component';
import { StoresComponent } from './stores/stores.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'stores', pathMatch: 'full' },
  {
    path: 'stores', component: StoresComponent, data: {
      title: 'Lojas | Instagram Shop'
    }
  },
  {
    path: 'store/:id', component: StoreComponent, data: {
      title: 'Loja | Instagram Shop'
    }
  },
  {
    path: 'product/:productId', component: ProductComponent, data: {
      title: 'Produto | Instagram Shop'
    }
  },
  {
    path: 'wishlist', component: WishlistComponent, data: {
      title: 'Lista de desejos | Instagram Shop'
    }
  }
  ,
  {
    path: 'config', component: ConfigComponent, data: {
      title: 'Configurações | Instagram Shop'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
