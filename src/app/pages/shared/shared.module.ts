import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CardStoreComponent } from './components/card-store/card-store.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileLinkComponent } from './components/profile-link/profile-link.component';
import { ImgPathPipe } from './pipes/img-path.pipe';


@NgModule({
  declarations: [CardComponent, HeaderComponent, CardStoreComponent, ProfileComponent, ProfileInfoComponent, ProfileLinkComponent, ImgPathPipe],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [CardComponent, HeaderComponent, CardStoreComponent, ProfileComponent, ProfileInfoComponent, ProfileLinkComponent, ImgPathPipe]
})
export class SharedModule { }
