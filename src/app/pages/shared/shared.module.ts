import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileLinkComponent } from './components/profile-link/profile-link.component';
import { ImgPathPipe } from './pipes/img-path.pipe';
import { BtnSaveComponent } from './components/btn-save/btn-save.component';
import { EmptyComponent } from './components/empty/empty.component';


@NgModule({
  declarations: [
    CardComponent, 
    HeaderComponent, 
    ProfileComponent, 
    ProfileInfoComponent, 
    ProfileLinkComponent, 
    BtnSaveComponent, 
    ImgPathPipe, 
    EmptyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent, 
    HeaderComponent, 
    ProfileComponent, 
    ProfileInfoComponent, 
    ProfileLinkComponent, 
    BtnSaveComponent, 
    ImgPathPipe,
    EmptyComponent
  ]
})
export class SharedModule { }
