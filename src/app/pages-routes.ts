import { Routes } from '@angular/router';

export const PAGES_ROUTES: Routes = [
   {
     path: '',
     loadChildren: () => import('./pages/home/home.module').then((mod) => mod.HomeModule)
   },
   {
     path: 'store',
     loadChildren: () => import('./pages/store/store.module').then((mod) => mod.StoreModule)
   },
   {
     path: 'wishlist',
     loadChildren: () => import('./pages/wishlist/wishlist.module').then((mod) => mod.WishlistModule)
   },
  //  {
  //     path: '**',
  //     redirectTo: '/',
  //     pathMatch: 'full'
  //  }
 ];