import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((mod) => mod.HomeModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./pages/store/store.module').then((mod) => mod.StoreModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then((mod) => mod.ProductModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then((mod) => mod.WishlistModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
