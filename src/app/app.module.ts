import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresComponent } from './pages/stores/stores.component';
import { StoreComponent } from './pages/stores/store/store.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { RouterModule } from '@angular/router';
import { CardStoreComponent } from './components/card-store/card-store.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ImgPathPipe } from './pipes/img-path.pipe';
import { BtnSaveComponent } from './components/btn-save/btn-save.component';
import { ProfileLinkComponent } from './components/profile-link/profile-link.component';
import { ConfigComponent } from './pages/config/config.component';
import { ProductComponent } from './pages/product/product.component';

import { UiSwitchModule } from 'ngx-ui-switch';

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
    ConfigComponent
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
