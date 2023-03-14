import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CardStoreComponent } from './shared/card-store/card-store.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './shared/profile/profile.component';
import { ProfileInfoComponent } from './shared/profile-info/profile-info.component';
import { ImgPathPipe } from './pipes/img-path.pipe';
import { BtnSaveComponent } from './shared/btn-save/btn-save.component';
import { ProfileLinkComponent } from './shared/profile-link/profile-link.component';

import { UiSwitchModule } from 'ngx-ui-switch';
import { CartItemComponent } from './shared/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardStoreComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ImgPathPipe,
    BtnSaveComponent,
    ProfileLinkComponent,
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
