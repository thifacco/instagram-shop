import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresComponent } from './pages/stores/stores.component';
import { StoreComponent } from './pages/stores/store/store.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './shared/card/card.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { RouterModule } from '@angular/router';
import { CardStoreComponent } from './shared/card-store/card-store.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './shared/profile/profile.component';
import { ProfileInfoComponent } from './shared/profile-info/profile-info.component';
import { ImgPathPipe } from './pipes/img-path.pipe';
import { BtnSaveComponent } from './shared/btn-save/btn-save.component';
import { ProfileLinkComponent } from './shared/profile-link/profile-link.component';
import { ConfigComponent } from './pages/config/config.component';
import { ProductComponent } from './pages/product/product.component';

import { UiSwitchModule } from 'ngx-ui-switch';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    StoreComponent,
    HeaderComponent,
    CardComponent,
    WishlistComponent,
    CardStoreComponent,
    ProductComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ImgPathPipe,
    BtnSaveComponent,
    ProfileLinkComponent,
    ConfigComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    UiSwitchModule.forRoot({
      size: 'small'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
