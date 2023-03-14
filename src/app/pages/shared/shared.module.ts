import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [CardComponent, HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [CardComponent, HeaderComponent]
})
export class SharedModule { }
