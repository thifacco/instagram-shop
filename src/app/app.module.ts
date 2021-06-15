import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './stores/store/store.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CardSearchComponent } from './components/card-search/card-search.component';
import { FeedComponent } from './feed/feed.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RouterModule } from '@angular/router';
import { CardQueryComponent } from './components/card-query/card-query.component';
import { CardStoreComponent } from './components/card-store/card-store.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    StoreComponent,
    HeaderComponent,
    CardComponent,
    CardSearchComponent,
    FeedComponent,
    WishlistComponent,
    CardQueryComponent,
    CardStoreComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
