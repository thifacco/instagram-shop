import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { EditorSelectionsComponent } from './editor-selections/editor-selections.component';
import { FeedComponent } from './feed/feed.component';
import { GuidesComponent } from './guides/guides.component';
import { ShopComponent } from './shop/shop.component';
import { StoreComponent } from './stores/store/store.component';
import { StoresComponent } from './stores/stores.component';
import { VideosComponent } from './videos/videos.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent, data: {
      title: 'Instagram Shop'
    },
    children: [
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
      {
        path: 'feed', component: FeedComponent, data: {
          title: 'Feed | Instagram Shop'
        }
      },
      {
        path: 'store/:id', component: StoreComponent, data: {
          title: 'Loja | Instagram Shop'
        }
      },
      {
        path: 'wishlist', component: WishlistComponent, data: {
          title: 'Lista de desejos | Instagram Shop'
        }
      },
      {
        path: 'stores', component: StoresComponent, data: {
          title: 'Lojas | Instagram Shop'
        }
      },
      {
        path: 'editor-selections', component: EditorSelectionsComponent, data: {
          title: 'Seleções do editor | Instagram Shop'
        }
      },
      {
        path: 'collections', component: CollectionsComponent, data: {
          title: 'Coleções | Instagram Shop'
        }
      },
      {
        path: 'guides', component: GuidesComponent, data: {
          title: 'Guias | Instagram Shop'
        }
      },
      {
        path: 'videos', component: VideosComponent, data: {
          title: 'Vídeos | Instagram Shop'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
