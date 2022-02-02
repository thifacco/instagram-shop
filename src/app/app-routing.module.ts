import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ConfigComponent } from './pages/config/config.component';
import { ProductComponent } from './pages/product/product.component';
import { StoreComponent } from './pages/stores/store/store.component';
import { StoresComponent } from './pages/stores/stores.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

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
  },
  {
    path: 'config', component: ConfigComponent, data: {
      title: 'Configurações | Instagram Shop'
    }
  },
  {
    path: 'cart', component: CartComponent, data: {
      title: 'Carrinho | Instagram Shop'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
