import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGES_ROUTES } from './pages-routes';

const routes: Routes = [...PAGES_ROUTES];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
