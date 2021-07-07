import { Component, Input, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-btn-save',
  templateUrl: './btn-save.component.html',
  styleUrls: ['./btn-save.component.scss']
})
export class BtnSaveComponent implements OnInit {

  @Input() productId: string;

  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit(): void {
    // verificar se o produto está na wishlist
  }

  saveToWishlist() {
    
    // não adicionar se já existir

    this.localstorageService.add('wishlist', this.productId);
  }

}
